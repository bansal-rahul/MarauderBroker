import React, {Component} from 'react'
import ReactCards from '../components/ReactCards'
import {Text,View,TouchableOpacity} from 'react-native'
import * as firebase from 'firebase'
import Database from '../firebase/database'

const sample = [
  {
    property: {
      name: 'Proptiger',
      address: 'Plot No 25, Echelon Square',
      base64Icon: 'http://www.getmdl.io/assets/demos/welcome_card.jpg'
    },
    personName: 'Rahul Bansal',
    contact: 9999999999,
    time: {
      start: '1 AM',
      end: '3 PM'
    }
  },
  {
    property: {
      name: 'Proptiger',
      address: 'Plot No 25, Echelon Square',
      base64Icon: 'http://www.getmdl.io/assets/demos/welcome_card.jpg'
    },
    personName: 'Rahul Bansal',
    contact: 9999999999,
    time: {
      start: '10 AM',
      end: '1 AM'
    }
  }
]

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bid:"",
      requests:[]
    }
  }
  async componentDidMount() {
    try {
      let user = await firebase.auth().currentUser
      Database.getBid(user.uid,(brokerId,propIds) => {
        Database.getProperties(propIds,(properties) => {
          this.setState({
            requests: properties,
            bid: brokerId
          })
        })
      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

    render() {
      console.log(this.state.bid)
      console.log(this.state.requests)
        return (
            <View style={{flex:1}}>
              <ReactCards cards={this.state.requests} />
            </View>
        )
    }
}