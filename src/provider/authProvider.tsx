import { createContext, useState } from "react"

type AuthContextType = {
    username: string
    setUsername: (value: string) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

function AuthProvider(props: any) {
    const [username, setUsername] = useState("Guest")
    
    return (
        <AuthContext.Provider value={{
            username, setUsername
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthProvider