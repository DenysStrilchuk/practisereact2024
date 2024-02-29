import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

import { movieService } from "../../../services";
import {MovieCard} from "../MovieCard";
import css from "./MoviesCard.module.css"

const MoviesCard = () => {
    const { id } = useParams();
    const [movieCard, setMoviesCard] = useState(null);

    useEffect(() => {
        movieService.getByMovieId(id).then(({ data }) => {
            setMoviesCard(data);
        });
    }, [id]);


    return (
        <div className={css.MoviesCard}>
            {movieCard && <MovieCard movieCard={movieCard}/>}
        </div>
    );
};

export { MoviesCard };
