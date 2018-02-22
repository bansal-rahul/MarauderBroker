import {StackNavigator} from 'react-navigation'
import SignIn from '../src/screens/SignIn'
import Home from '../src/screens/Home'
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import * as firebase from 'firebase'

const logout = async () => {

  try {

      await firebase.auth().signOut();

  } catch (error) {
      console.log(error.toString());
  }

}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
  },
  logoutButton: {
    fontSize: 16,
    color: 'rgb(237,19,46)',
    marginRight: 8,
  },
});

export const SignedOut = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    }
})

export const SignedIn = StackNavigator({
    Home: {
        screen: Home,
        headerMode: 'float',
        navigationOptions: {
          title: 'Notification Panel',
          headerLeft: <Image style={styles.logo} source={require('./img/logo_small.png')} />,
          headerRight: <TouchableOpacity onPress={logout} ><Text style={styles.logoutButton}>Log Out</Text></TouchableOpacity> 
        }
    }
})

export const createRootNavigator = (signedIn = false) => {
    return StackNavigator(
      {
        SignedIn: {
          screen: SignedIn,
          navigationOptions: {
            gesturesEnabled: false
          }
        },
        SignedOut: {
          screen: SignedOut,
          navigationOptions: {
            gesturesEnabled: false
          }
        }
      },
      {
        headerMode: "none",
        mode: "modal",
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    );
  };