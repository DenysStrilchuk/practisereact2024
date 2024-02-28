import css from "./BackdropPoster.css"

const BackdropPoster = ({img, title}) => {
    return (
        <div>
            <img className={css.BackPoster} src={`https://image.tmdb.org/t/p/w500${img}`} alt={title}/>
        </div>
    );
};

export {BackdropPoster};