import {StackNavigator} from 'react-navigation'
import SignIn from '../src/screens/SignIn'
import Home from '../src/screens/Home'

export const SignedOut = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'Sign In'
        }
    }
})

export const SignedIn = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            ttile: 'Notifications'
        }
    }
})

export const createRootNavigator = (signedIn = false) => {
    return StackNavigator(
      {
        SignedIn: {
          screen: SignedIn,
          navigationOptions: {
            gesturesEnabled: false
          }
        },
        SignedOut: {
          screen: SignedOut,
          navigationOptions: {
            gesturesEnabled: false
          }
        }
      },
      {
        headerMode: "none",
        mode: "modal",
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    );
  };