import css from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ThemeSwitcher } from "../ThemeSwitcherContainer";
import { useTheme } from '../ThemeContextContainer/ThemeContext';

const Header = () => {
    const { isDarkMode } = useTheme();

    return (
        <div>
            <div className={`${css.Header} ${isDarkMode ? css['dark-mode'] : ''}`}>
                <h1>IMovie</h1>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'genres'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export {Header};
