import css from "./Header.module.css";
import {Navigate} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <h1>The Movie Database</h1>
            <Navigate to={'movies'}>Movies</Navigate>
        </div>
    );
};

export {Header};