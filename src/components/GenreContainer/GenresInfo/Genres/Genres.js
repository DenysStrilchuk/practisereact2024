import {useEffect, useState} from "react";

import {genreService} from "../../../../services";
import {Genre} from "../Genre";
import css from "./Genres.module.css";

const Genres = () => {
    const [genres, setGenres] = useState({genres:[]});

    useEffect(() => {
        genreService.getAll().then(({data}) =>  setGenres(data));
    }, []);
    return (
        <div className={css.Genres}>
            {genres.genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};