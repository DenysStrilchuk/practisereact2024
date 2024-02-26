const baseURL = 'https://api.themoviedb.org/3';

const movie = '/discover/movie';
const movieDetails = '/movie';

const urls = {
    movie:{
        base: movie
    },
    movieDetails:{
        movieById: (id) => `${movieDetails}/${id}`
    }

}

export {
    baseURL,
    urls
}