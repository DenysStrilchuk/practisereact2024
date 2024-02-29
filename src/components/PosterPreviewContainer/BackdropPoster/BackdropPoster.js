import css from "./BackdropPoster.css"

const BackdropPoster = ({img, title}) => {
    return (
        <div className={css.BackPoster}>
            <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title}/>
        </div>
    );
};

export {BackdropPoster};