import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text> Hello </Text>
        </CardSection>
      </Card>
    );
  }
}

export default Homepage;
