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
    propertyName: '3 BHK Apartment',
    personName: 'Rahul',
    contact: 9999999999,
    timing: '3 PM'
  },
  {
    propertyName: '3 BHK Apartment',
    personName: 'Rahul',
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