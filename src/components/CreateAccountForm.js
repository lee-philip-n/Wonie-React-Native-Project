import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { email, password, error, loading, verifyPassword } = state.auth;

  return {
    email,
    password,
    verifyPassword,
    error,
    loading,
  };
};

class CreateAccountForm extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onVerifyPasswordChange = this.onVerifyPasswordChange.bind(this);
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

  onVerifyPasswordChange(password) {
    this.props.verifyPasswordChanged(password);
  }

  onButtonPress() {
    const { email, password, verifyPassword } = this.props;

    this.props.createUser({ email, password, verifyPassword });
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
        Create Account
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
          <CardSection>
            <Input
              secureTextEntry
              label='Verify PW'
              placeholder='re-type password'
              onChangeText={this.onVerifyPasswordChange}
              value={this.props.verifyPassword}
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

export default connect(mapStateToProps, actions)(CreateAccountForm);
