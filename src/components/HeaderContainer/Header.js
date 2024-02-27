import css from "./Header.module.css";

const Header = () => {
    return (
        <div className={css.Header}>
            <h1>The Movie Database</h1>
        </div>
    );
};

export {Header};