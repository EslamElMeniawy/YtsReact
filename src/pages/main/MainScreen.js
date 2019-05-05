import React, { Component } from 'react';
import {
  SafeAreaView, Image, View, ActivityIndicator, Text, RefreshControl,
} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import PropTypes from 'prop-types';

import AppStatusBar from '../../components/AppStatusBar';
import MovieCard from '../../components/MovieCard/MovieCard';
import { Logo } from '../../utils/StaticImages';
import Styles from './Styles';
import { green } from '../../utils/Colors';
import AxiosService from '../../utils/AxiosService';
import { logDebug, logError } from '../../utils/DebugUtils';
import LayoutUtil from '../../utils/LayoutUtil';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isLoading: true,
      isRefreshing: false,
      errorMessage: '',
      // eslint-disable-next-line react/no-unused-state
      moviesList: [],
      dataProvider: new DataProvider((r1, r2) => r1 !== r2),
      layoutProvider: LayoutUtil.getLayoutProvider(),
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  // #region View render methods
  getContent() {
    const { isLoading, errorMessage } = this.state;

    if (isLoading) {
      return this.getLoadingView();
    }

    if (errorMessage === '') {
      return this.getListView();
    }

    return this.getErrorView();
  }

  getLoadingView = () => (
    <View style={Styles.loadingErrorContainer}>
      <ActivityIndicator size="large" color={green} />
    </View>
  );

  getErrorView() {
    const { errorMessage } = this.state;

    return (
      <View style={Styles.loadingErrorContainer}>
        <Text
          style={Styles.error}
          onPress={() => {
            this.setState({ isLoading: true });
          }}
        >
          {errorMessage}
        </Text>
      </View>
    );
  }

  getListView() {
    const { isRefreshing, dataProvider, layoutProvider } = this.state;
    const { navigation } = this.props;

    return (
      <RecyclerListView
        style={Styles.recycler}
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={(type, movie) => <MovieCard navigation={navigation} movie={movie} />}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={100}
        scrollViewProps={{
          refreshControl: (
            <RefreshControl refreshing={isRefreshing} onRefresh={this.handleRefresh} />
          ),
        }}
      />
    );
  }
  // #endregion

  // #region API methods
  getMovies() {
    const { page } = this.state;
    const URL = `list_movies.json?limit=20&page=${page}`;

    AxiosService.request({
      url: URL,
      method: 'GET',
    })
      .then(response => this.handleResponse(response))
      .catch(error => this.handleError(error));
  }

  handleRefresh = () => {
    logDebug('onRefresh');
    this.setState({ page: 1, isRefreshing: true }, () => {
      this.getMovies();
    });
  };

  handleLoadMore = () => {
    logDebug('onEndReached');
    this.setState(
      previousState => ({ page: previousState.page + 1, isRefreshing: true }),
      () => {
        this.getMovies();
      },
    );
  };

  handleResponse(response) {
    logDebug('Response: ', response);
    let errorMessage = '';
    let { page } = this.state;
    let moviesList = [];

    if (response.data) {
      if (response.data.status === 'ok') {
        if (response.data.data) {
          if (response.data.data.page_number) {
            page = response.data.data.page_number;
          }

          if (response.data.data.movies) {
            moviesList = response.data.data.movies;
          } else {
            errorMessage = 'No movies available\nClick to retry';

            if (page !== 1) {
              page -= 1;
            }
          }
        } else {
          errorMessage = 'Error while getting movies\nClick to retry';

          if (page !== 1) {
            page -= 1;
          }
        }
      } else if (response.data.status_message || response.data.status_message !== '') {
        errorMessage = response.data.status_message;

        if (page !== 1) {
          page -= 1;
        }
      } else {
        errorMessage = 'Error while getting movies\nClick to retry';

        if (page !== 1) {
          page -= 1;
        }
      }
    } else {
      errorMessage = 'Error while getting movies\nClick to retry';

      if (page !== 1) {
        page -= 1;
      }
    }

    this.setState(previousState => ({
      page,
      isLoading: false,
      isRefreshing: false,
      errorMessage,
      moviesList: page === 1 ? moviesList : previousState.moviesList.concat(moviesList),
      dataProvider: previousState.dataProvider.cloneWithRows(
        page === 1 ? moviesList : previousState.moviesList.concat(moviesList),
      ),
    }));
  }

  handleError(error) {
    logError(error);

    this.setState(previousState => ({
      page: previousState.page === 1 ? previousState.page : previousState.page - 1,
      isLoading: false,
      isRefreshing: false,
      errorMessage: 'Error while getting movies\nClick to retry',
    }));
  }
  // #endregion

  render() {
    return (
      <SafeAreaView style={Styles.safeAreaView}>
        <AppStatusBar />
        <Toolbar
          style={Styles.toolbar}
          centerElement={<Image style={Styles.toolbarImage} source={Logo} />}
        />
        {this.getContent()}
      </SafeAreaView>
    );
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
