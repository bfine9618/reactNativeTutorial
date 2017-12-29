import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            onChangeText={text => this.props.emailChanged(text)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
          />
        </CardSection>
        <CardSection>
          <Button> Login </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(null, { emailChanged })(LoginForm);
