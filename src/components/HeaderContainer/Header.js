import css from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {ThemeSwitcher} from "../ThemeSwitcherContainer";

const Header = () => {
    return (
        <div className={css.Header}>
            <img  src="https://www.pikpng.com/pngl/m/188-1882112_film-slide-film-tape-transparent-background-clipart.png"
                 alt="Film,slide - Film Tape Transparent Background Clipart@pikpng.com"/>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <NavLink to={'search'}>Search</NavLink>
            <ThemeSwitcher/>
        </div>
    );
};

export {Header};