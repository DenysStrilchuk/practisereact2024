import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { MovieByGenre } from "../MovieByGenre/MovieByGenre";
import { genreService } from "../../../services";
import css from "./MoviesByGenre.module.css";
import { Pagination } from "../../PaginationContainer";

const MoviesByGenre = () => {
    const { id } = useParams();
    const [moviesByGenre, setMoviesByGenre] = useState({ prev: null, next: null, results: [] });
    const [currentPage, setCurrentPage] = useState(1);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    useEffect(() => {
        genreService.getByGenreId(id, currentPage).then(({ data }) => {
            const { page, total_pages, results } = data;
            setMoviesByGenre({
                page,
                total_pages,
                results
            });
            setIsPrevDisabled(page === 1);
            setIsNextDisabled(page === total_pages);
        });
    }, [id, currentPage]);

    const goToPage = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <div className={css.movies_list}>
                {moviesByGenre.results.map(movieByGenre => <MovieByGenre key={movieByGenre.id} movieByGenre={movieByGenre} />)}
            </div>
            <div className={css.buttons_block}>
                <button disabled={isPrevDisabled} onClick={() => goToPage(currentPage - 1)}
                        className={css.buttons}>prev</button>
                <div>
                    <Pagination currentPage={currentPage} totalPages={moviesByGenre.total_pages} setPage={setCurrentPage} />
                </div>
                <button disabled={isNextDisabled} onClick={() => goToPage(currentPage + 1)}
                        className={css.buttons}>next</button>
            </div>
        </div>
    );
};

export {
    MoviesByGenre
}
