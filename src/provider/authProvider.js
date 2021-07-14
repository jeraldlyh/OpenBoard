import { createContext, useState, useContext, useEffect } from "react"
import axiosInstance from "../axios/axiosInstance"
import firebaseClient from "../../firebase/firebaseClient"
import firebase from "firebase/app"
import "firebase/auth"


export const AuthContext = createContext < firebase.User | null > (null)

export const useAuthContext = () => useContext(AuthContext)

function AuthProvider(props) {
    firebaseClient()
    const [currentUser, setCurrentUser] = useState < firebase.User | null > (null)
    const [loading, setLoading] = useState(false)


    const registerUser = async (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
    }

    const loginUser = async (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email.trim(), password)
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
            setLoading(false)
        })

        return unsubscribe
    }, [])


    return (
        <AuthContext.Provider value={{
            currentUser,
            registerUser,
            loginUser
        }}
        >
            {!loading && props.children}
        </AuthContext.Provider>
    )

}

export default AuthProvider