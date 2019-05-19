import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { LinearGradient } from 'expo';

export default class AuthScreen extends Component {
  onLogin = () => {
    this.props.navigation.navigate('map');
  }

  onSignup = () => {
    this.props.navigation.navigate('signup');
  }

  onForgot = () => {
    this.props.navigation.navigate('forgot');
  }

  render() {
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
        >
        </Input>
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