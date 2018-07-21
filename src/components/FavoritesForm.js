import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ListItem from './ListItem';

const mapStateToProps = (state) => {
  //data we get back is an object so use lodash map function to change object to array
  const movies = _.map(state.movieListField, (val, uid) => {
    return { ...val, uid }; // {shift: 'Monday, name: 'S', phone: '1234567890', id: '12345'};
  })

  return {
    movies,
  };
};

class FavoritesForm extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFav();
  }

  renderItem(movie) {
    return <ListItem movie={movie} />
  }

  render() {
    return (
      <FlatList
        keyExtractor={(movie) => movie.id}
        data={this.props.movies}
        renderItem={this.renderItem}
        keyboardShouldPersistTaps='always'
      />
    );
  }
}

export default connect(mapStateToProps, actions)(FavoritesForm);
