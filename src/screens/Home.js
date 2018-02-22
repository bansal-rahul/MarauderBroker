import React, {Component} from 'react'
import ReactCards from '../components/ReactCards'
import {Text,View,TouchableOpacity} from 'react-native'
import * as firebase from 'firebase'
import Database from '../firebase/database'

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
        console.log(propIds)
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