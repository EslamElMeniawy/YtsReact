import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { Toolbar, Icon, Button } from 'react-native-material-ui';
import PropTypes from 'prop-types';

import Log from '../../utils/DebugUtils';
import AppStatusBar from '../../components/AppStatusBar';
import Styles from './Styles';
import { Placeholder, Imdb } from '../../utils/StaticImages';
import { green } from '../../utils/Colors';

function getDuration(runtime) {
  if (runtime) {
    if (runtime === 0) {
      return '--';
    }

    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}H ${minutes}M`;
  }

  return '--';
}

function getRating(rating) {
  return `${rating}/10`;
}

function openLink(link) {
  Linking.canOpenURL(link).then((supported) => {
    if (supported) {
      Linking.openURL(link);
    } else {
      Log(`Don't know how to open URI: ${link}`);
    }
  });
}

function getTorrents(torrents) {
  if (torrents) {
    return (
      <FlatList
        data={torrents}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <Button
            raised
            icon="file-download"
            text={`${item.quality} ${item.type}\n${item.size}`}
            style={Styles.button}
            onPress={() => openLink(item.url)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    );
  }

  return null;
}

function getImageBlock(movie) {
  return (
    <View style={Styles.container}>
      <ImageBackground
        source={Placeholder}
        imageStyle={{ resizeMode: 'contain' }}
        style={Styles.imageContainer}
      >
        <Image style={Styles.image} source={{ uri: movie.medium_cover_image }} />
      </ImageBackground>
      <View style={Styles.dataContainer}>
        <View style={Styles.rowContainer}>
          <Icon name="av-timer" color={green} />
          <Text style={Styles.durationRating}>{getDuration(movie.runtime)}</Text>
        </View>
        <View style={Styles.rowContainer}>
          <TouchableOpacity
            onPress={() => openLink(`https://www.imdb.com/title/${movie.imdb_code}/`)}
          >
            <Image source={Imdb} />
          </TouchableOpacity>
          <Text style={Styles.durationRating}>{getRating(movie.rating)}</Text>
        </View>
        {getTorrents(movie.torrents)}
      </View>
    </View>
  );
}

function getHeaderView(movie) {
  return (
    <ImageBackground source={{ uri: movie.background_image }} style={Styles.background}>
      <View>
        <Text style={Styles.title}>{movie.title}</Text>
        <Text style={Styles.yearGenres}>{movie.year}</Text>
        {movie.genres ? <Text style={Styles.yearGenres}>{movie.genres.join(' / ')}</Text> : null}
        {getImageBlock(movie)}
      </View>
    </ImageBackground>
  );
}

function getSynopsis(movie) {
  return (
    <View style={Styles.synopsisContainer}>
      <Text style={Styles.synopsisTitle}>Synopsis</Text>
      <Text style={Styles.synopsis}>{movie.synopsis}</Text>
    </View>
  );
}

function getMovieContent(movie) {
  return (
    <ScrollView>
      {getHeaderView(movie)}
      {getSynopsis(movie)}
    </ScrollView>
  );
}

function getContent(movie) {
  if (movie === {}) {
    return (
      <View style={Styles.errorContainer}>
        <Text style={Styles.error}>Error while loading movie data</Text>
      </View>
    );
  }

  return getMovieContent(movie);
}

export default function DetailsScreen({ navigation }) {
  const movie = navigation.getParam('movie', {});
  Log('Got movie: ', movie);

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <AppStatusBar />
      <Toolbar
        centerElement="Details"
        style={Styles.toolbar}
        leftElement="arrow-back"
        onLeftElementPress={() => navigation.goBack()}
        rightElement="arrow-back"
        onRightElementPress={() => {}}
      />
      {getContent(movie)}
    </SafeAreaView>
  );
}

DetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
