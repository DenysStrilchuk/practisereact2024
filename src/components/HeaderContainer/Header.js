import css from "./Header.module.css";
import {NavLink} from "react-bootstrap";

const Header = () => {
    return (
        <div className={css.Header}>
            <h1>The Movie Database</h1>
            <NavLink src={'movies'}>Movie</NavLink>
        </div>
    );
};

export {Header};