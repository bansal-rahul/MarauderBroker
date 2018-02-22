import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import * as firebase from 'firebase'
import Firebase from './src/firebase/firebase'
import {SignedOut,SignedIn} from './src/router'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 22
  }
});


export default class App extends Component {
  constructor(props) {
    super(props)
    Firebase.initialise()
    this.state = {
      signedIn: false
    }
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      let authStatus = user ? true : false;
      this.setState({
        signedIn: authStatus,
      })
    })
  }

  render() {
    const {signedIn} = this.state
    if (signedIn) {
      return <SignedIn />;
    } else {
      return <SignedOut />;
    }
  }
}