import React from 'react';

import { useTheme } from '../ThemeContextContainer/ThemeContext';

const ThemeSwitcher = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div>
            <label>
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                Toggle Dark Mode
            </label>
        </div>
    );
};

export {
    ThemeSwitcher
}
