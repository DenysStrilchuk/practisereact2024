import css from "./Movie.module.css"
import {StarsRating} from "../../StarsRating ";

const Movie = ({movie}) => {
    const {title, poster_path, vote_average} = movie;
    return (
        <div className={css.Movie}>
            <img className={css.movie_img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <div>{title}</div>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {Movie};