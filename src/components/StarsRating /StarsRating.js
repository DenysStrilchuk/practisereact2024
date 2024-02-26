import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({vote_average}) => {
    return (
        <div>
            <StarRatings
                rating={vote_average / 2}
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

export {StarsRating};