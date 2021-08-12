import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;

    //load auth context
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)

    return (
        <div className="navbar" style={style}>
            <h1>My Hook App</h1>
            <h2>{isAuthenticated ? 'You are logged in ...' : ''}</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    <button onClick={toggleAuth}>{isAuthenticated ? 'logout' : 'login'}</button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;