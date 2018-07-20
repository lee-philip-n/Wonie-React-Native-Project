import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  const { containerStyle } = styles;

  //props.children = the component within the parent (ie Text component in AlbumDetail component)
  return (
    <View style={[containerStyle, props.style]}>
      {props.children}
    </View>
  )
}

//CSS - uses flexbox properties
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyCOntent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
  },
};

export { CardSection };