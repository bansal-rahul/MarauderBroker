import React, { Component } from 'react'
import {
    Text,
    View,
    Stylesheet
} from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginTop: 5
    }
})
export default class PropertyDetail extends Component {
    render() {
        const {property} = this.props
        return (
            <View style={styles.container}>
            </View>
        )
    }
}