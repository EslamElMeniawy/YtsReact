import React, { PureComponent } from 'react';
import {
  View, Image, Text, Platform, ImageBackground,
} from 'react-native';
import { Card, Icon, Button } from 'react-native-material-ui';
import PropTypes from 'prop-types';

import Log from '../../utils/DebugUtils';
import Styles from './Styles';
import { Placeholder } from '../../utils/StaticImages';
import { green } from '../../utils/Colors';

const isIOS = Platform.OS === 'ios';

export default class MovieCard extends PureComponent {
  componentWillUpdate() {
    // On iOS while recycling till the new image is loaded the old one remains visible.
    // This forcefully hides the old image.
    // It is then made visible onLoad.
    if (isIOS && this.imageRef) {
      this.imageRef.setNativeProps({
        opacity: 0,
      });
    }
  }

  handleOnLoad = () => {
    if (isIOS && this.imageRef) {
      this.imageRef.setNativeProps({
        opacity: 1,
      });
    }
  };

  handleClick = (movie, navigation) => {
    Log('Clicked movie: ', movie);
    navigation.navigate('Details', { movie });
  };

  getRating = rating => `${rating}/10`;

  render() {
    const { movie, navigation } = this.props;

    return (
      <Card onPress={() => this.handleClick(movie, navigation)} style={Styles.card}>
        <View style={Styles.container}>
          <ImageBackground
            source={Placeholder}
            imageStyle={{ resizeMode: 'contain' }}
            style={Styles.imageContainer}
          >
            <Image
              ref={(ref) => {
                this.imageRef = ref;
              }}
              style={Styles.image}
              onLoad={this.handleOnLoad}
              source={{ uri: movie.medium_cover_image }}
            />
          </ImageBackground>
          <View style={Styles.textContainer}>
            <Text style={Styles.title} ellipsizeMode="tail" numberOfLines={1}>
              {movie.title}
            </Text>
            <View style={Styles.yearRatingContainer}>
              <Text style={Styles.year}>{movie.year}</Text>
              <View style={Styles.ratingContainer}>
                <Icon name="star" size={20} color={green} />
                <Text style={Styles.rating}>{this.getRating(movie.rating)}</Text>
              </View>
            </View>
            <View style={Styles.ratingContainer}>
              {movie.genres
                ? movie.genres.slice(0, 2).map(genre => (
                  <Text style={Styles.genre} key={genre}>
                    {genre}
                  </Text>
                ))
                : null}
            </View>
            <Button
              onPress={() => this.handleClick(movie, navigation)}
              raised
              text="View Details"
              style={Styles.button}
            />
          </View>
        </View>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  movie: PropTypes.instanceOf(Object).isRequired,
};
