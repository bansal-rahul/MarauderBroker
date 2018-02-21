import React,{Component} from 'react';
import { View, TouchableWithoutFeedback,StyleSheet,Text,TextInput,TouchableOpacity } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import * as firebase from 'firebase'
//import {Sae} from "react-native-textinput-effects"
// import { onSignIn } from "../auth";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8781bd",
        paddingTop: 50
    },

    buttons: {
        backgroundColor: "white"
    },

    formGroup: {
        padding: 50
    },

    title: {
        paddingBottom: 16,
        textAlign: "center",
        color: "#000",
        fontSize: 35,
        fontWeight: "bold",
        opacity: 0.8,
    },

    submit: {
        paddingTop: 30
    },

    response: {
        textAlign: "center",
        paddingTop: 0,
        padding: 50
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

        //DismissKeyboard();

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
                    <View style={styles.formGroup}>
                        <Text style={styles.title}>Firebase Sample</Text>
                        <TextInput
                            placeholder={"Email Address"}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                            onChangeText={(email) => this.setState({email})}
                        />
                        <TextInput
                            placeholder={"Password"}
                            onChangeText={(password) => this.setState({password})}
                        />

                        <View style={styles.submit}>
                            <TouchableOpacity onPress={this.login} style={styles.buttons}>
                                <Text>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.response}>Test</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}