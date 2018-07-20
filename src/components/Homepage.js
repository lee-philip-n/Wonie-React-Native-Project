import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import SearchField from './SearchField';
import MovieList from './MovieList';

mapStateToProps = (state) => {
  const { searchedMovies } = state.searchField;

  return {
    searchedMovies,
  };
};

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  renderMovieList() {
    if (this.props.searchedMovies.length > 0) {
      return (
        <Card>
          <CardSection style={{marginBottom: 80}}>
            <MovieList />
          </CardSection>
        </Card>
      );
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SearchField />
        {this.renderMovieList()}
      </View>
    );
  }
}

export default connect(mapStateToProps)(Homepage);
