import React, { useState } from "react";

import {searchService} from "../../../services/searchService";
import {Movie} from "../../MoviesListContainer";
import css from './SearchMovies.module.css'


const SearchMovies = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSearch = async () => {
        if (query.trim() !== "") {
            try {
                const response = await searchService.getAll(query);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <div className={css.input_style}>
                <input
                       type="text"
                       placeholder="Search movies..."
                       value={query}
                       onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className={css.movies_list}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {SearchMovies};
