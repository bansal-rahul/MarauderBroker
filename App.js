/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Notifications from './src/components/Notifications'

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

export default class App extends Component {
  render() {
    return (
        <Notifications notifications={sample} />
    );
  }
}