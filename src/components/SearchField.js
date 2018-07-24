import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import * as actions from '../actions';

mapStateToProps = (state) => {
  const { movie, loading, searchedMovies, error } = state.searchField;

  return {
    movie,
    loading,
    searchedMovies,
    error,
  };
};

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.onSearchButtonPress = this.onSearchButtonPress.bind(this);
  }

  componentDidMount() {
    this.props.homepageMovie();
  }

  onSearchButtonPress() {
    const { movie } = this.props;

    this.props.searchMovie(movie);
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner />
      );
    };

    return (
      <Button style={{flex: 1, borderWidth: 0}} handlePress={this.onSearchButtonPress}>
        🔎
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            style={{flex: 3}}
            placeholder="i.e. Harry Potter"
            value={this.props.movie}
            onChangeText={value => this.props.updateMovieSearch(value)}
          />
          {this.renderButton()}
        </CardSection>
        {this.renderError()}    
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default connect(mapStateToProps, actions)(SearchField);