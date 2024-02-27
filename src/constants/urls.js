const baseURL = 'https://api.themoviedb.org/3';

const movie = '/discover/movie';
const movieDetails = '/movie';
const genres = '/genre/movie/list';

const urls = {
    movie:{
        base: movie
    },
    movieDetails:{
        movieById: (id) => `${movieDetails}/${id}`
    },
    genres:{
        base: genres
    }

}

export {
    baseURL,
    urls
}