import React, { Component } from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LinearGradient } from 'expo';
import axios from 'axios';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth_actions';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    const initialState = {
      success: false,
      error: '',
      loading: false,
      username: '',
      email: '',
      password: ''
    }
    return initialState;
  }

  resetState = () => {
    this.setState(this.getInitialState);
  }

   onSignup = async () => {
    this.setState({
      error: '',
      loading: true
    })

    const { email, username, password } = this.state;

    await this.props.signup({username, email, password});
  }

  onSignin = () => {
    this.setState({
      success: false
    })
    this.props.navigation.navigate('auth');
  }

  onForgot = () => {
    this.props.navigation.navigate('forgot');
  }

  renderButton() {
    const { isLoading } = this.props.auth;

    if(isLoading) {
      return <ActivityIndicator size="large" color='red' />
    }
    return (
      <Button
          containerStyle={styles.signupButtonStyle}
          title="Sign Up"
          buttonStyle={{backgroundColor: "#FF9F1C"}}
          titleStyle={{fontWeight: 'bold', fontSize: 16}}
          onPress={this.onSignup}
        />
    )
  }

  render() {
    const { isLoading, signedup } = this.props.auth;
    const { msg } = this.props.error;

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
            Welcome!
          </Text>
          <Text
            style={styles.smallWecomeText}
          >
            Please register to continue
          </Text>
        </View>
        <Input
          placeholder='Username'
          leftIcon={
            <Icon
              name='account'
              size={25}
              color='#92A1B1'
            />
          }
          color='white'
          containerStyle={styles.inputStyle}
          inputStyle={{color: '#2A3C4E'}}
          leftIconContainerStyle={styles.leftIconContainerStyle}
          onChangeText={username => this.setState({ username })}
        >
        </Input>
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
          onChangeText={email => this.setState({ email })}
        >
        </Input>
        <Input
          placeholder='Password'f
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
          onChangeText={password => this.setState({ password })}
        >
        </Input>
        <View style={{paddingTop: 10, alignItems: 'center'}}>
          {msg.errors !== undefined ? msg.errors.map((err, i) =>
            <Text style={{color: 'red'}} key={i}>
              {err}
            </Text>
          ) : null}

        </View>
        {signedup ?
          <View style={{paddingTop: 10, alignItems: 'center'}}>
            <Text style={styles.successUpperText}>
              Success! Please check your email for activation link.
            </Text>
            <Text style={styles.successBottomText} onPress={this.onSignin}>
              Then sign in
            </Text>
          </View> : this.renderButton()
        }
        <View style={{alignItems: 'center', marginTop: 70}}>
          <Text
            style={styles.signinTextStyle}
            onPress={this.onSignin}
          >
            Already had an account? Sign in.
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
  signupButtonStyle: {
    marginTop: 20,
    width: "85%",
    borderRadius: 30
  },
  signinTextStyle: {
    color: '#FF9F1C',
    fontSize: 13
  },
  forgotTextStyle: {
    paddingTop: 5,
    color: '#BCC2CD',
    fontSize: 12
  },
  successUpperText: {
    color: '#EFEFEF',
    fontSize: 12
  },
  successBottomText: {
    color: '#FF9F1C',
    fontSize: 12
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
})

export default connect(mapStateToProps, {
  signup
})(SignupScreen);