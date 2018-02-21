import React,{Component} from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
// import { onSignIn } from "../auth";

export default class SignIn extends Component {
    constructor(props) {
        super(props)
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
            <View style={{ paddingVertical: 20 }}>
    <Card title="SIGN IN">
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => this.login}  // handle onSignIn logic
      />
    </Card>
  </View>
        )
    }
}