import React, { Component } from 'react'
import {
    Text,
    View,
    Stylesheet,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase'
import Database from "../firebase/database";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        marginTop: 20,
        borderRadius: 10
      },
    propertyName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'rgb(237,20,46)',
      },
      propertyAddress: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'rgb(145,145,145)',
      },
      lineStyle:{
        borderBottomColor: 'rgb(172,172,172)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width:'100%',
        margin:2
      },
      user: {
        padding: 5,
        width: '100%',
        alignItems: 'center',
      },
      userName: {
        fontSize: 16,
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'rgb(236,20,46)',
      },
      userContact: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'rgb(68,68,68)',
      },
      image: {
          borderRadius: 10,
      },
      property: {
        marginHorizontal: 5,
        padding: 5,
        width: '100%',
    },
    messageBox: {
        margin: 10,
    },
    message: {
        fontSize: 14,
        textAlign: 'left',
        color: 'rgb(68,68,68)',
    },
    question: {
        fontSize: 14,
        textAlign: 'left',
        fontWeight: 'bold',
        color: 'rgb(254,163,60)',
    },
    buttonBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    yesButton: {
        backgroundColor: 'rgb(254,163,60)',
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        width: 125,
        height: 45,
        marginLeft: 8,
    },
    noButton: {
        backgroundColor: '#e81c28',
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        width: 125,
        height: 45,
    }
})

export default class ReactCards extends Component {

    renderCards = ({item}) => {
        const {propId} = item
        return (
            <Card containerStyle={styles.container}>
            <View style={styles.property}>
                    <Text style={styles.propertyName}>{item.property.name}</Text>
                    <Text style={styles.propertyAddress}>{item.property.address}</Text>
                </View>
                <View style = {styles.lineStyle}></View>

                <View style={styles.user}>
                    <Text style={styles.userName}><Icon name="ios-contact" size={20} color='rgb(0,0,0)' /> {item.personName}</Text>
                    <Text style={styles.userContact}><Icon name="ios-call" size={20} color='rgb(0,0,0)' /> {item.contact}</Text>
                </View>
                <View style = {styles.lineStyle}></View>
               
               <View style={styles.messageBox}>
                    <Text style={styles.message}>
                        Hi, I would like to visit your property between {item.time.start} - {item.time.end}.
                    </Text>
                    <Text style={styles.question}>
                        Are you available at this time ?
                    </Text>
                </View>
                <View style={styles.buttonBox}>
                    <Button onPress={
                        () => firebase.database().ref("/prop/" + propId).update({
                            status: 'Yes'
                        })
                    } buttonStyle={styles.yesButton} title='Yes' />
                    <Button onPress={
                        () => firebase.database().ref("/prop/" + propId).update({
                            status: 'No'
                        })
                    } buttonStyle={styles.noButton} title='No' />
                </View>
            </Card>
        )
    }

  render() {
        const {cards} = this.props
        return (
            <FlatList data={cards} renderItem={this.renderCards}/>
          )
    }
}
