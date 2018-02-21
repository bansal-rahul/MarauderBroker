import React, {Component} from 'react'
import Notifications from '../components/Notifications'
import {Text,View,TouchableOpacity} from 'react-native'
import * as firebase from 'firebase'

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

export default class Home extends Component {
  async logout() {

    try {

        await firebase.auth().signOut();

    } catch (error) {
        console.log(error.toString());
    }

}
    render() {
        return (
            <View style={{flex:1}}>
            <Notifications notifications={sample} />
            <TouchableOpacity onPress={this.logout}>
              <Text>Log Out</Text>
            </TouchableOpacity> 
            </View>
        )
    }
}