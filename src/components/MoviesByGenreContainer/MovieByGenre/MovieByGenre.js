import {PosterPreview} from "../../PosterPreviewContainer/MainPoster/PosterPreview";
import {StarsRating} from "../../StarsRatingContainer";
import css from "./MovieByGenre.module.css"

const MovieByGenre = ({movieByGenre}) => {
    const {title, poster_path, vote_average} = movieByGenre;
    return (
        <div className={css.MovieByGenre}>
            <PosterPreview img={poster_path} title={title}/>
            <div>{title}</div>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {MovieByGenre};