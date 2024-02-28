import css from "./MovieCard.module.css"
import {StarsRating} from "../../StarsRatingContainer";
import {MovieInfo} from "../../MovieInfoContainer";
import {BackdropPoster} from "../../PosterPreviewContainer/BackdropPoster";


const MovieCard = ({movieCard}) => {
    const {title, overview, vote_average, genres, backdrop_path, release_date, runtime} = movieCard;
    return (
        <div className={css.MovieCard}>
            <h1  className={css.title}>{title}</h1>
            <div  className={css.mainInfo}>
                <div className={css.img_style}>
                    <BackdropPoster img={backdrop_path} title={title}/>
                    <h2>Rating</h2>
                    <StarsRating vote_average={vote_average}/>
                </div>
                <div>

                    <MovieInfo overview={overview} rating={vote_average} release={release_date} runtime={runtime}
                               genres={genres}/>
                </div>
            </div>

        </div>
    );
};

export {MovieCard};