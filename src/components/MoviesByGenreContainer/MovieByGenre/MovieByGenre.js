import {PosterPreview} from "../../PosterPreviewContainer/MainPoster/PosterPreview";
import {StarsRating} from "../../StarsRatingContainer";
import css from "./MovieByGenre.module.css"
import {useNavigate} from "react-router-dom";

const MovieByGenre = ({movieByGenre}) => {
    const {title, poster_path, vote_average, id} = movieByGenre;
    const navigate = useNavigate();
    return (
        <div className={css.MovieByGenre} onClick={() => navigate(`/movie/${id}`)}>
            <PosterPreview img={poster_path} title={title}/>
            <div>{title}</div>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {MovieByGenre};