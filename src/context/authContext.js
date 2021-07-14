import { createContext, useState, useContext, useEffect } from "react"
import nookies from "nookies"
import firebaseClient from "../../firebase/firebaseClient"
import firebase from "firebase/app"
import "firebase/auth"


export const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

function AuthProvider(props) {
    firebaseClient()
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(false)


    const registerFirebase = async (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    const loginFirebase = async (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }

    const logoutFirebase = () => {
        nookies.set(undefined, "token", "", {})         // Clear cookies
        return firebase.auth().signOut()
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                setCurrentUser(null)
                nookies.set(undefined, "token", "", {})
            } else {
                const token = await user.getIdToken()
                setCurrentUser(user)
                nookies.set(undefined, "token", token, {})
            }
            setLoading(false)
        })

        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={{
            currentUser,
            registerFirebase,
            loginFirebase,
            logoutFirebase,
        }}
        >
            {!loading && props.children}
        </AuthContext.Provider>
    )

}

export default AuthProvider