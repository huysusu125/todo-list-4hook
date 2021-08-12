import React,{createContext, useState} from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    //State
    const [isAuthenticated, setAuthenticated] = useState(false)
    const toggleAuth = () => {
        setAuthenticated(!isAuthenticated)
    }

    const AuthContextData = {
        isAuthenticated: isAuthenticated,
        toggleAuth: toggleAuth,
    }

    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider