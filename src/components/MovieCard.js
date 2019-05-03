import React, { PureComponent } from 'react';
import {
  View, Image, Text, Platform, ImageBackground,
} from 'react-native';
import { Card, Icon, Button } from 'react-native-material-ui';
import PropTypes from 'prop-types';

import { logDebug } from '../utils/DebugUtils';
import { MovieCardStyles } from '../utils/Styles';
import { Placeholder } from '../utils/StaticImages';
import { green } from '../utils/Colors';

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
    logDebug('Clicked movie: ', movie);
    navigation.navigate('Details', { movie });
  };

  render() {
    const { movie, navigation } = this.props;

    return (
      <Card onPress={() => this.handleClick(movie, navigation)} style={MovieCardStyles.card}>
        <View style={MovieCardStyles.container}>
          <ImageBackground
            source={Placeholder}
            imageStyle={{ resizeMode: 'contain' }}
            style={MovieCardStyles.imageContainer}
          >
            <Image
              ref={(ref) => {
                this.imageRef = ref;
              }}
              style={MovieCardStyles.image}
              onLoad={this.handleOnLoad}
              source={{ uri: movie.medium_cover_image }}
            />
          </ImageBackground>
          <View style={MovieCardStyles.textContainer}>
            <Text style={MovieCardStyles.title} ellipsizeMode="tail" numberOfLines={1}>
              {movie.title}
            </Text>
            <View style={MovieCardStyles.yearRatingContainer}>
              <Text style={MovieCardStyles.year}>{movie.year}</Text>
              <View style={MovieCardStyles.ratingContainer}>
                <Icon name="star" size={20} color={green} />
                <Text style={MovieCardStyles.rating}>
                  {movie.rating}
                  /10
                </Text>
              </View>
            </View>
            <View style={MovieCardStyles.ratingContainer}>
              {movie.genres
                ? movie.genres.slice(0, 2).map(genre => (
                  <Text style={MovieCardStyles.genre} key={genre}>
                    {genre}
                  </Text>
                ))
                : null}
            </View>
            <Button
              onPress={() => this.handleClick(movie, navigation)}
              raised
              text="View Details"
              style={MovieCardStyles.button}
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
