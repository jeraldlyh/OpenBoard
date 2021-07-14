import firebaseAdmin from "firebase-admin"
import serviceAccount from "../openboard-config.json"

export const verifyIdToken = (token) => {
    if (!firebaseAdmin.apps.length) {
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(serviceAccount),
            databaseURL: process.env.FIREBASE_AUTH_DOMAIN
        })
    }

    return firebaseAdmin
        .auth()
        .verifyIdToken(token)
        .catch(error => {
            console.log(error)
        })
}