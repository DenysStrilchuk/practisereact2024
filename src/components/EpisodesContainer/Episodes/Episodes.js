import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {episodeActions} from "../../../store/slices";
import {Episode} from "../Episode";
import css from "./Episodes.module.css";

const Episodes = () => {
    const {episodes} = useSelector(state => state.episodes);
    const [query,] = useSearchParams({page:'1'});
    const page = query.get('page');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(episodeActions.getAll({page}))
    }, [page, dispatch]);

    return (
        <div className={css.EpisodeTable}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};