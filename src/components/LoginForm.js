import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;

  return {
    email: email,
    password: password,
    error: error,
    loading: loading,
  };
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  componentDidMount() {
    this.props.reset();
  }
  
  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
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
    }
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size='large' />
      );
    }

    return (
      <Button style={{flex: 1}} handlePress={this.onButtonPress}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label='Email'
              placeholder='user@gmail.com'
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label='Password'
              placeholder='password'
              onChangeText={this.onPasswordChange}
              value={this.props.password}
            />
          </CardSection>

          {this.renderError()}

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
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

export default connect(mapStateToProps, actions)(LoginForm);
