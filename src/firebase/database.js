import * as firebase from "firebase";

class Database {

    static setResponse(response) {
        let userMobilePath = "/prop/" + userId;

        return firebase.database().ref(userMobilePath).set({
            response: response
        })
    }

    static listenUserMobile() {

        let userId = '6108760'
        let userMobilePath = "/user/" + userId;

        firebase.database().ref(userMobilePath).on('value', (snapshot) => {

            var brokerName = "";

            if (snapshot.val()) {
                brokerName = snapshot.val().broker_name
            }

            callback(mobile)
        });
    }

}

module.exports = Database;