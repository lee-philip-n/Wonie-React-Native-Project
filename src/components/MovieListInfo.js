import React, { Component } from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';
import * as actions from '../actions';

class MovieListInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imageStyle, titleStyle, textStyle, containerStyle } = styles;
    return (
      <ScrollView style={{flex: 1, marginBottom: 10}}>
        <Card>
          <CardSection>
            <Text style={titleStyle}>{this.props.movie.title}</Text>
          </CardSection>
          
          <CardSection style={containerStyle}>
            <Image style={imageStyle} source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}` }} />
          </CardSection>

          <CardSection style={containerStyle}>
          <Text style={titleStyle}>Release Date: </Text>
            <Text style={textStyle}>
              {this.props.movie.release_date}
            </Text>
          </CardSection>          

          <CardSection style={containerStyle, {flexDirection: 'column'}}>
          <Text style={titleStyle}>Synopsis: </Text>
            <Text style={textStyle}>
              {this.props.movie.overview}
            </Text>
          </CardSection>

        </Card>
      </ScrollView>
    )
  }
}

const styles = {
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: 18,
    padding: 10,
    fontWeight: '600',
  },
  imageStyle: {
    height: 375,
    margin: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 250,
  },
  textStyle: {
    margin: 5,
  }
}

export default connect(mapStateToProps, actions)(MovieListInfo);
