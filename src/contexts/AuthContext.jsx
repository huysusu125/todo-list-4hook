import React,{createContext, useEffect, useState} from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    //State
    const [isAuthenticated, setAuthenticated] = useState(false)
    const toggleAuth = () => {
        setAuthenticated(!isAuthenticated)
    }

    useEffect(() => {
        alert(isAuthenticated ? 'Login Successful' : 'You are logout')
    },[isAuthenticated])
    
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