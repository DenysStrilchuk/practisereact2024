import { useEffect, useState } from "react";

import { Movie } from "../Movie/Movie";
import css from './Movies.module.css';
import { usePageQuery } from "../../../hooks";
import { movieService } from "../../../services";
import {Pagination} from "../../PaginationContainer";

const Movies = () => {
    const [movies, setMovies] = useState({ prev: null, next: null, results: [] });
    const { page, prevPage, nextPage, setPage } = usePageQuery();
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

    const goToPage = (newPage) => {
        setPage(newPage.toString());
    };



    return (
        <div>
            <div className={css.movies_list}>
                {movies.results.map(movie => <Movie key={movie.id} movie={movie} />)}
            </div>
            <div className={css.buttons_block}>
                <button disabled={isPrevDisabled} onClick={prevPage} className={css.buttons}>prev</button>
                <div>
                    <Pagination currentPage={parseInt(page)} totalPages={movies.total_pages}
                                goToPage={goToPage} setPage={setPage}/>
                </div>
                <button disabled={isNextDisabled} onClick={nextPage} className={css.buttons}>next</button>
            </div>

        </div>
    );
};

export { Movies };
