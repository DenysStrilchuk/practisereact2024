import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
    const savedTheme = localStorage.getItem('isDarkMode');
    const [isDarkMode, setIsDarkMode] = useState(savedTheme === 'true');

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('isDarkMode', newMode.toString());
    };

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export {
    ThemeProvider,
    useTheme
};
