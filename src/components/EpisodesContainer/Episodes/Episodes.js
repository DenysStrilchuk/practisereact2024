import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {episodeService} from "../../../services";
import {Episode} from "../Episode/Episode";
import css from "./Episodes.module.css"

const Episodes = () => {
    const [episodeRes, setEpisodeRes] = useState({prev: null, next: null, results: []});
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    useEffect(() => {
        episodeService.getAll(page).then(({data}) => setEpisodeRes(() => {
            const {info: {prev, next}, results} = data;
            return {
                prev,
                next,
                results
            }
        }))
    }, [page]);

    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString())
            return prev
        })
    }

    const nextPage = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <div>
            <div className={css.list_of_episodes}>
                {episodeRes.results.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!episodeRes.prev} onClick={prevPage}>prev</button>
                <button disabled={!episodeRes.next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};