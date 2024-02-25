import css from "./Movie.module.css"

const Movie = ({movie}) => {
    const {title, poster_path} = movie;
    return (
        <div className={css.Movie}>
            <img className={css.movie_img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <div>{title}</div>
        </div>
    );
};

export {Movie};