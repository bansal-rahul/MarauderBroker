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


const sample = [
  {
    property: {
      address: 'Plot No 25, Echelon Square',
      details: '3 BHK Apartment'
    },
    personName: 'Rahul Bansal',
    contact: 9999999999,
    timing: '3 PM'
  },
  {
    property: {
      address: 'Plot No 25, Echelon Square',
      details: '3 BHK Apartment'
    },
    personName: 'Rahul Bansal',
    contact: 9999999999,
    timing: '3 PM'
  }
]

class Initial extends Component {
  constructor(props) {
    super(props)
    Firebase.initialise()
    this.getInitialView()
    this.state = {
      userLoaded: false,
      initialView: null
    }
    this.getInitialView = this.getInitialView.bind(this)
  }

  getInitialView() {
    firebase.auth().onAuthStateChanged((user) => {

      let initialView = user ? "Home" : "Login";

      this.setState({
        userLoaded: true,
        initialView: initialView
      })
    })
  }

  static renderScene(route, navigator) {

    switch (route.name) {

      case "Home":
        return (<Notifications notifications={sample} />);
        break;

      case "Login":
        return (<Login navigator={navigator} />);
        break;

    }

  }

  static configureScene(route) {

    if (route.sceneConfig) {
      return (route.sceneConfig);
    } else {
      return ({
        ...Navigator.SceneConfigs.HorizontalSwipeJump,
        gestures: {}
      });
    }

  }

  render() {

    if (this.state.userLoaded) {

      return (
          <Navigator
              initialRoute={{name: this.state.initialView}}
              renderScene={Initial.renderScene}
              configureScene={Initial.configureScene}
          />);
    } else {
      return null;
    }

  }


}

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