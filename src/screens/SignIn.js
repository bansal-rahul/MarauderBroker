import React,{Component} from 'react';
import { 
    View, 
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image } from "react-native";

import { 
    Card, 
    Button, 
    FormLabel, 
    FormInput } from "react-native-elements";

import * as firebase from 'firebase';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 50
    },
    imageContainer: {
        marginTop: 50,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 40,
    },
    personalInfoContainer: {
        marginTop: 50,
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    personalImage: {
        width: 40,
        height: 50,
    },
    personalInfoText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'rgb(118,118,118)'
    },
    lineStyle:{
        borderBottomColor: 'rgb(209,209,209)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width:'100%',
        marginTop:100
      },
    formGroup: {
        marginTop: 10,
        padding: 20,
    },
    formInputStyle: {
        margin: 10,
        marginBottom: 20,
        fontSize: 14,
        borderBottomColor: 'rgb(114,114,114)',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    loginContainer: {
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        width: 200,
        height: 50,
        backgroundColor: 'rgb(237,19,46)',
        borderRadius: 5,
    },
    loginText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(1,1,1)',
    },
    error: {
        color: 'red',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    }
});

export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:"",
            password:""
        }
        this.login = this.login.bind(this)
    }

    async login() {
        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        } catch (error) {
            console.log(error.toString())
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => {}}>
                <View style={styles.container}>
                    <View style={styles.imageContainer} >
                        <Image style={styles.logo} source={require('../img/logo.png')} />
                    </View>
                    <View style={styles.personalInfoContainer} >
                        <Image style={styles.personalImage} source={require('../img/personal_info.png')} />
                        <Text style={styles.personalInfoText}>Personal Information</Text>
                    </View>
                    <View style = {styles.lineStyle} />
                    <View style={styles.formGroup}>
                        <TextInput
                            style={styles.formInputStyle}
                            placeholder={"Email Address"}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                            onChangeText={(email) => this.setState({email})}
                        />
                        <TextInput
                            style={styles.formInputStyle}
                            placeholder={"Password"}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                        />
                        <View style={styles.loginContainer}>
                            <Button buttonStyle={styles.loginButton} title='Login' onPress={this.login} />
                        </View>
                        <Text style={styles.error}>Error</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}