import css from "./MovieCard.module.css"
import {StarsRating} from "../../StarsRating ";
import {MovieInfo} from "../../MovieInfo";
import {BackdropPoster} from "../../PosterPreview/BackdropPoster";

const MovieCard = ({movieCard}) => {
    const {title, overview, vote_average, genres:[{name}], backdrop_path} = movieCard;
    return (
        <div className={css.MovieCard}>
            <h1>{title}</h1>
            <BackdropPoster img={backdrop_path} title={title}/>
            <h2>Rating</h2>
            <StarsRating vote_average={vote_average}/>
            <MovieInfo overview={overview} rating={vote_average} genres={name}/>
        </div>
    );
};

export {MovieCard};