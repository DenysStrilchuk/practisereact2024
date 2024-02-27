import React, {useEffect, useState} from 'react';

import {MovieByGenre} from "../MovieByGenre";
import {useParams} from "react-router-dom";
import {genreService} from "../../../services";
import css from './MoviesByGenre.module.css';


const MoviesByGenre = () => {
    const {id} = useParams();
    const [moviesByGenre, setMoviesByGenre] = useState({results: []});


    useEffect(() => {
        genreService.getByGenreId(id).then(({data}) => {
            const {results} = (data);
            setMoviesByGenre({
                results
            })
        })
    }, [id]);



    return (
        <div className={css.movies_list}>
            {moviesByGenre.results.map(movieByGenre => <MovieByGenre key={movieByGenre.id} movieByGenre={movieByGenre}/>)}
        </div>
    );
};

export {
    MoviesByGenre
}
