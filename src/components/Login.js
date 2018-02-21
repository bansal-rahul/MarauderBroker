import React, {Component} from 'react'
import {
    Text,
    View,
    Stylesheet,
    TouchableOpacity
} from 'react-native'
import Button from 'apsl-react-native-button'
import * as firebase from 'firebase'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8781bd",
        paddingTop: 50
    },

    buttons: {
        backgroundColor: "whitesmoke"
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

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:"",
            password:"",
            response:""
        }
        this.login = this.login.bind(this)
    }

    async login() {

        //DismissKeyboard();

        try {
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

            this.setState({
                response: "Logged In!"
            });

            setTimeout(() => {
                this.props.navigator.push({
                    name: "Home"
                })
            }, 1500);

        } catch (error) {
            this.setState({
                response: error.toString()
            })
        }

    }

    render() {

        return (
            <TouchableWithoutFeedback onPress={() => {DismissKeyboard()}}>
                <View style={styles.container}>
                    <View style={styles.formGroup}>
                        <Text style={styles.title}>Firebase Sample</Text>
                        <Sae
                            label={"Email Address"}
                            onChangeText={(email) => this.setState({email})}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <Sae
                            label={"Password"}
                            onChangeText={(password) => this.setState({password})}
                            password={true}
                            autoCapitalize="none"
                        />

                        <View style={styles.submit}>
                            <Button onPress={this.signup} style={styles.buttons} textStyle={{fontSize: 18}}>
                                Sign up
                            </Button>
                            <Button onPress={this.login} style={styles.buttons} textStyle={{fontSize: 18}}>
                                Login
                            </Button>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.response}>{this.state.response}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

