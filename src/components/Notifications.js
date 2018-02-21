import React, { Component } from 'react'
import {
    Text,
    View,
    Stylesheet,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native'

const styles = StyleSheet.create({
    container: {
       //height: '100%',
       //backgroundColor: 'grey',
       paddingRight: 10,
       paddingTop: 22
    },
    card: {
        width: '90%',
        marginHorizontal: 20,
        padding: 10,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: 'rgba(0,0,0,0.54)',
        shadowOffset: { height: 3, width: 3 },
        elevation: 5,
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10
    },
    button: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'grey'
    }
})


export default class Notifications extends Component {

    renderNotification = ({item}) => (
        <View style={styles.card}>
                <Text>{item.propertyName}</Text>
                <Text>{item.personName}</Text>
                <Text>{item.contact}</Text>
                <Text>{item.timing}</Text>
                <Text>Are You available at this time?</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.button}>
                        <Text>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
    render() {
        const {notifications} = this.props

        return (
            <View style={styles.container}>
                <FlatList 
                data={notifications}
                renderItem={this.renderNotification}
                />
            </View>
        )
    }
}