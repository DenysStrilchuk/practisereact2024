const MovieInfo = ({overview, genres}) => {
    return (
        <div>
            <img src="" alt=""/>
            <h2>Overview:</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genres}</p>
        </div>
    );
};

export {MovieInfo};