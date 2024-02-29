import css from "./MovieInfo.module.css";

const MovieInfo = ({overview, release, runtime, genres}) => {


    return (
        <div>
            <h2>Overview:</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <div className={css.genres}>
                {genres.map((genres, index) => (
                    <p key={index} className={css.genre}>{genres.name} </p>
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