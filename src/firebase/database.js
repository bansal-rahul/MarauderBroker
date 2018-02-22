import * as firebase from "firebase";

export default class Database {

    static setResponse(userId,response) {
        let userPath = "/prop/" + userId;

        return firebase.database().ref(userPath).update({
            response: response
        })
    }

    static getProperties(propIds,callback) {
        let props = []
        let propPath = '/prop/'
        firebase.database().ref(propPath).once('value',(snapshot) => {
            snapshot.forEach((childSnapshot) => {
                if(propIds.includes(childSnapshot.key)) {
                    props.push(childSnapshot.val())
                }
            })
            callback(props)
        })
    }

    static getBid(uid,callback) {
        let bid = ""
        let pids = []
        let userPath = '/brokers/' + uid
        firebase.database().ref(userPath).once('value').then(
            function(snapshot) {
                if(snapshot.val()) {
                bid = snapshot.val().bid 
                pids = snapshot.val().pid
            }
            callback(bid,pids)
         }
        )
    }
}
