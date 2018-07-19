// Import a library to help create a component
import React from 'react';
import { Text, View } from 'react-native';

// Create a Functional Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  const { headerText } = props;
  
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

//CSS - uses flexbox properties
const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
};

// Make component available to other parts of the app
export  { Header };