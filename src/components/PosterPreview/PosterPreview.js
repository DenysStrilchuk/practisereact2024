import css from "./Poster.module.css"

const PosterPreview = ({img, title}) => {
    return (
        <div>
            <img className={css.Poster} src={`https://image.tmdb.org/t/p/w500${img}`} alt={title}/>
        </div>
    );
};

export {PosterPreview};