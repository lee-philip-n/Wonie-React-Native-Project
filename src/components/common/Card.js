// Import a library to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { containerStyle } = styles;

  //props.children = the component within the parent (ie CardSection component in AlbumDetail component)
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  )
}

//CSS - uses flexbox properties
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export { Card };