import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const mapStateToProps = (state) => {
  const { searchedMovies } = state.searchField;

  return {
    searchedMovies,
  };
};

class MovieList extends Component {

  renderItem(movie) {
    return <ListItem movie={movie} />
  }

  render() {
    return (
      <FlatList
        keyExtractor={(movie) => movie.id}
        data={this.props.searchedMovies}
        renderItem={this.renderItem}
        keyboardShouldPersistTaps='always'
      />
    )
  }
};

export default connect(mapStateToProps)(MovieList);
