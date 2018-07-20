import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//check react-native docs for Touchable (button) event
//children = the component within the parent (ie text in AlbumDetail component)
const Button = ({ handlePress, children, style }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={[buttonStyle, style]} onPress={handlePress}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
}

export { Button };