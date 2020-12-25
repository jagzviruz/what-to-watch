import React, {createContext, useReducer, useEffect, useState} from 'react';

const ThemeContext = createContext('light');

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme((currTheme) => currTheme == 'light' ? 'dark' : 'light');
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
 
export default ThemeContext;

