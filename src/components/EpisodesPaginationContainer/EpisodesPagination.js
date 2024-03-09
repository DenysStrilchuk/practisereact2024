import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";

import css from "./EpisodesPagination.module.css";

const EpisodesPagination = () => {
    const [, setQuery] = useSearchParams({page: '1'});
    const {next, prev} = useSelector(state => state.episodes);

    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString());
            return prev
        })
    }

    const nextPage = () => {
        setQuery(next => {
            next.set('page', (+next.get('page') + 1).toString())
            return next
        })
    }

    return (
        <div className={css.EpisodesPaginationBtn}>
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
        </div>
    );
};

export {EpisodesPagination};