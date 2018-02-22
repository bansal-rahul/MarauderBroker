import * as firebase from "firebase";

class Database {

    static setResponse(response) {
        let userMobilePath = "/prop/" + userId;

        return firebase.database().ref(userMobilePath).set({
            response: response
        })
    }

    static populateCards(brokerId) {

        let userId = '6108760'
        let brokerCardPath = "/prop/" + userId

        firebase.database().ref(brokerCardPath).on('value', (snapshot) => {

            var brokerName = "";

            if (snapshot.val()) {
                brokerName = snapshot.val().broker_name
            }
        });
    }

}

module.exports = Database;