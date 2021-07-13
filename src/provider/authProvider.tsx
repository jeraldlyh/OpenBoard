import { createContext, useState, useContext, useEffect } from "react"

type AuthContextType = {
    username: string
    setUsername: (value: string) => void
    id: string,
    setID: (value: string) => void
}

export const AuthContext = createContext<AuthContextType>({
    username: "",
    setUsername: () => {},
    id: "",
    setID: () => {},
})

export const useAuthContext = () => useContext(AuthContext)

function AuthProvider(props: any) {
    const [username, setUsername] = useState("")
    const [id, setID] = useState((""))

    return (
        <AuthContext.Provider value={{
            username, setUsername,
            id, setID
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthProvider