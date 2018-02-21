import React, {Component} from 'react'
import ReactCards from '../components/ReactCards'
import {Text,View,TouchableOpacity} from 'react-native'
import * as firebase from 'firebase'

const sample = [
  {
    property: {
      name: 'Proptiger',
      address: 'Plot No 25, Echelon Square',
      base64Icon: 'http://www.getmdl.io/assets/demos/welcome_card.jpg'
    },
    personName: 'Rahul Bansal',
    contact: 9999999999,
    startTime: '3 PM',
    endTime: '4 PM'
  },
  {
    property: {
      name: 'Proptiger',
      address: 'Plot No 25, Echelon Square',
      base64Icon: 'http://www.getmdl.io/assets/demos/welcome_card.jpg'
    },
    personName: 'Rahul Bansal',
    contact: 9999999999,
    startTime: '3 PM',
    endTime: '4 PM'
  }
]

export default class Home extends Component {
    render() {
        return (
            <View style={{flex:1}}>
              <ReactCards cards={sample} />
            </View>
        )
    }
}