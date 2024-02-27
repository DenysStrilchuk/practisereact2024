import css from "./Movie.module.css"
import {StarsRating} from "../../StarsRatingContainer";
import {useNavigate} from "react-router-dom";
import {PosterPreview} from "../../PosterPreviewContainer/MainPoster/PosterPreview";


const Movie = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;
    const navigate = useNavigate();
    return (
        <div className={css.Movie} onClick={() => navigate(`/movie/${id}`)}>
            <PosterPreview img={poster_path} title={title}/>
            <div>{title}</div>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {Movie};