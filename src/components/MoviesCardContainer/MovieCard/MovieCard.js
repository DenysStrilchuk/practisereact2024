import css from "./MovieCard.module.css"
import {StarsRating} from "../../StarsRatingContainer";
import {MovieInfo} from "../../MovieInfoContainer";
import {BackdropPoster} from "../../PosterPreviewContainer/BackdropPoster";
import {useState} from "react";


const MovieCard = ({movieCard}) => {
    const {title, overview, vote_average, genres, backdrop_path, release_date, runtime} = movieCard;
    const [selectedGenre, setSelectedGenre] = useState(null);

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
    };

    return (
        <div className={css.MovieCard}>
            <div  className={css.mainInfo}>
                <div className={css.img_style}>
                    <h1 className={css.title}>{title}</h1>
                    <BackdropPoster img={backdrop_path} title={title} className={css.img}/>
                    <h2>Rating</h2>
                    <StarsRating vote_average={vote_average}/>
                </div>
                <div className={css.movieInfo}>
                    <MovieInfo
                        overview={overview}
                        rating={vote_average}
                        release={release_date}
                        runtime={runtime}
                        genres={genres}
                        onGenreClick={handleGenreClick} // Передача функції для обробки натискання на жанр
                    />
                </div>
            </div>
            {selectedGenre && (
                <div>
                    <h2>Selected Genre:</h2>
                    <p>{selectedGenre.name}</p>
                    <p>{selectedGenre.id}</p>
                </div>
            )}
        </div>
    );
};


export {
    MovieCard
}