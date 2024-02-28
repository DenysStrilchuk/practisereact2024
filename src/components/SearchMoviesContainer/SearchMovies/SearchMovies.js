import React, { useState } from "react";

import {searchService} from "../../../services/searchService";
import {Movies} from "../../MoviesListContainer";


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
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
            <Movies movies={movies} />
        </div>
    );
};

export { SearchMovies };
