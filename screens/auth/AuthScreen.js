import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LinearGradient } from 'expo';
import axios from 'axios';
import auth_reducer from '../../reducers/auth_reducer';
import { connect } from 'react-redux';

class AuthScreen extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    const initialState = {
      emailInput: '',
      passwordInput: '',
      emailEmpty: false,
      passwordEmpty: false
    }
    return initialState;
  }

  resetState = () => {
    this.setState(this.getInitialState())
  }

  onLogin = () => {
    if(this.state.emailInput != '' && this.regexCheck()) {
      if(this.state.passwordInput != '') {
        this.resetState()
        this.props.navigation.navigate('map');
      } else {
          this.setState({
            passwordEmpty: true
          })
        }
      } else {
        this.setState({
          emailEmpty: true
        })
    }
  }

  regexCheck = () => {
    const regex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    return regex.test(this.state.emailInput)
  }

  onSignup = () => {
    this.props.navigation.navigate('signup');
  }

  onForgot = () => {
    this.props.navigation.navigate('forgot');
  }

  render() {
    const { signedup } = this.props;

    return (
      <LinearGradient
        colors={['#304768','#374A6A','#3C4D6C','#3F4E6D','#414E6D','#465170']}
        style={styles.container}>
        <Image
          source={require('../../assets/logoFull.png')}
          style={styles.logo}
        />
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text
            style={styles.bigWelcomeText}
          >
            Welcome Back!
          </Text>
          <Text
            style={styles.smallWecomeText}
          >
            Login to continue to Travelmate
          </Text>
        </View>
        <Input
          placeholder='Email'
          leftIcon={
            <Icon
              name='email-outline'
              size={25}
              color='#92A1B1'
            />
          }
          color='white'
          containerStyle={styles.inputStyle}
          inputStyle={{color: '#2A3C4E'}}
          leftIconContainerStyle={styles.leftIconContainerStyle}
          onChangeText={emailInput => this.setState({ emailInput, passwordEmpty: false, emailEmpty: false })}
        >
        </Input>
        <Input
          placeholder='Password'
          secureTextEntry={true}
          leftIcon={
            <Icon
              name='lock-outline'
              size={25}
              color='#92A1B1'
            />
          }
          color='white'
          containerStyle={styles.inputStyle}
          inputStyle={{color: '#2A3C4E'}}
          leftIconContainerStyle={styles.leftIconContainerStyle}
          onChangeText={passwordInput => this.setState({ passwordInput, passwordEmpty: false, emailEmpty: false })}
        >
        </Input>
        {this.state.emailEmpty ?
          <Text style={{color: 'red', paddingTop: 10, fontStyle: 'italic'}}>
            Please fill out your email
          </Text> : null
        }
        {(!this.state.emailEmpty && this.state.passwordEmpty) ?
          <Text style={{color: 'red', paddingTop: 10, fontStyle: 'italic'}}>
            Please fill out your password
          </Text> : null
        }
        {signedup ?
          <Text style={{color: 'green', paddingTop: 10, fontStyle: 'italic'}}>
            Successfully signed up, please login!
          </Text> : null}
        <Button
            containerStyle={styles.loginButtonStyle}
            title="Log In"
            buttonStyle={{backgroundColor: "#FF9F1C"}}
            titleStyle={{fontWeight: 'bold', fontSize: 16}}
            onPress={this.onLogin}
        />

        <View style={{alignItems: 'center', marginTop: 70}}>
          <Text
            style={styles.signupTextStyle}
            onPress={this.onSignup}
          >
            New user? Sign up
          </Text>
          <Text
            style={styles.forgotTextStyle}
            onPress={this.onForgot}
          >
            Forgot password?
          </Text>
        </View>
      </LinearGradient>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 150
  },
  bigWelcomeText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#EFEFEF'
  },
  smallWecomeText: {
    fontSize: 16,
    color: '#EFEFEF'
  },
  inputStyle: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20
  },
  leftIconContainerStyle: {
    paddingTop: 3,
    marginLeft: 10,
    marginRight: 10
  },
  loginButtonStyle: {
    marginTop: 20,
    width: "85%",
    borderRadius: 30
  },
  signupTextStyle: {
    color: '#FF9F1C',
    fontSize: 13
  },
  forgotTextStyle: {
    paddingTop: 5,
    color: '#BCC2CD',
    fontSize: 12
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(AuthScreen)