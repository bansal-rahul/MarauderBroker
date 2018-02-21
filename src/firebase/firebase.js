import * as firebase from 'firebase'
import config from '../config'

export default class Firebase {
    static initialise() {
        firebase.initializeApp(config.firebaseConfig)
    }
}