import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {episodesAction} from "../../../store/slices/episodesSlice";
import {Episode} from "../Episode";
import css from "./Episodes.module.css";

const Episodes = () => {
    const {episodes} = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    const [query,] = useSearchParams({page: '1'});
    const page = query.get('page');

    useEffect(() => {
        dispatch(episodesAction.getAll({page}))
    }, [page, dispatch]);

    return (
        <div className={css.EpisodeTable}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};