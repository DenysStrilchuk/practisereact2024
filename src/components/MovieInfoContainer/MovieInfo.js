import css from "./MovieInfo.module.css";
import {Genre} from "../GenreContainer/GenresInfo";

const MovieInfo = ({overview, release, runtime, genres, onGenreClick}) => {
    return (
        <div>
            <h2>Overview:</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <div className={css.genres}>
                {genres.map((genre, index) => (
                    <Genre key={index} genre={genre} onGenreClick={onGenreClick} />
                ))}
            </div>
            <h2>Runtime</h2>
            <p>{runtime} minutes</p>
            <h2>Release date</h2>
            <p>{release}</p>
        </div>
    );
};

export {MovieInfo};