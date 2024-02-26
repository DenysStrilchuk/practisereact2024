import StarRatings from "react-star-ratings/build/star-ratings";

import css from "./Movie.module.css"

const Movie = ({movie}) => {
    const {title, poster_path, vote_average} = movie;
    return (
        <div className={css.Movie}>
            <img className={css.movie_img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <div>{title}</div>
            <StarRatings
                rating={vote_average / 2} // Перетворюємо рейтинг з діапазону 0-10 на 0-5 для зірочок
                starRatedColor="blue"
                starEmptyColor="gray"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="2px"
            />
        </div>
    );
};

export {Movie};