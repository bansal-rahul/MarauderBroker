import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        //marginTop: 3,
        borderWidth: 1,
        padding: 5,
        width: '100%',
        backgroundColor:'#F5FCFF'
    }
})

export default class PropertyDetail extends Component {
    render() {
        const {property} = this.props
        return (
            <View style={styles.container}>
            <Text>{property.address}</Text>
            <Text>{property.details}</Text>
            </View>
        )
    }
}