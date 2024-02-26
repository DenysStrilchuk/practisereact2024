import css from "../../MoviesList/Movie/Movie.module.css";

const MovieCard = ({movieCard}) => {
    const {poster_path, title, overview} = movieCard;
    return (
        <div>
            <h1>{title}</h1>
            <img className={css.movie_img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <h2>{overview}</h2>
        </div>
    );
};

export {MovieCard};