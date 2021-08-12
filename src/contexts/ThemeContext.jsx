import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const childContext = props.children;
    
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: {
            background: 'rgb(240, 240, 240)',
            color: 'black'
        },
        dark: {
            background: 'rgb(39, 39, 39)',
            color: 'white'
        }
    })

    const toggleTheme = () => {
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme,
        })
    }

    const themeContextData = {
        theme: theme,
        toggleTheme: toggleTheme,
    }

    return (
        <ThemeContext.Provider value={themeContextData}>
            {childContext}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;


