import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { titleStyle } = styles;
    const { title } = this.props.movie.item;
    
    return (
      <TouchableWithoutFeedback
        onPress={() => Actions.movieListInfo({ movie: this.props.movie.item })}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>

    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    padding: 5,
  },
}

export default ListItem;
