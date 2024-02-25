import { useEffect, useState } from "react";

import { Movie } from "../Movie/Movie";
import css from './Movies.module.css';
import { usePageQuery } from "../../../hooks";
import { movieService } from "../../../services";

const Movies = () => {
    const [movies, setMovies] = useState({ prev: null, next: null, results: [] });
    const { page, prevPage, nextPage } = usePageQuery();
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    useEffect(() => {
        movieService.getAll(page).then(({ data }) => {
            const { page, total_pages, results } = data;
            setMovies({
                page,
                total_pages,
                results
            });
            setIsPrevDisabled(page === 1);
            setIsNextDisabled(page === total_pages);
        });
    }, [page]);

    return (
        <div>
            <div className={css.movies_list}>
                {movies.results.map(movie => <Movie key={movie.id} movie={movie} />)}
            </div>
            <div className={css.buttons}>
                <button disabled={isPrevDisabled} onClick={prevPage}>prev</button>
                <button disabled={isNextDisabled} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export { Movies };
