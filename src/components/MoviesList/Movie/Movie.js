import css from "./Movie.module.css"
import {StarsRating} from "../../StarsRating ";
import {useNavigate} from "react-router-dom";


const Movie = ({movie}) => {
    const {title, poster_path, vote_average, id} = movie;
    const navigate = useNavigate();
    return (
        <div className={css.Movie} onClick={() => navigate(`/movie/${id}`)}>
            <img className={css.movie_img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <div>{title}</div>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {Movie};