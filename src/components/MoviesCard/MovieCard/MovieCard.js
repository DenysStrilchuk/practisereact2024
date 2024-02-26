import {PosterPreview} from "../../PosterPreview/PosterPreview";
import css from "./MovieCard.module.css"
import {StarsRating} from "../../StarsRating ";

const MovieCard = ({movieCard}) => {
    const {poster_path, title, overview, vote_average, genres:[{name}]} = movieCard;
    return (
        <div className={css.MovieCard}>
            <h1>{title}</h1>
            <PosterPreview img={poster_path} title={title}/>
            <h2>{overview}</h2>
            <h2>Rating</h2>
            <StarsRating vote_average={vote_average}/>
            <h2>Genres</h2>
            <p>{name}</p>
        </div>
    );
};

export {MovieCard};