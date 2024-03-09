import css from "./Episode.module.css";


const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    return (
        <div className={css.EpisodeTable}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>episode: {chapter}</div>
        </div>
    );
};

export {Episode};