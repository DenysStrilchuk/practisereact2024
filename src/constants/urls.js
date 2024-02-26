const baseURL = 'https://api.themoviedb.org/3';

const movie = '/discover/movie';

const urls = {
    movie:{
        base: movie,
        byId: (id) => `${movie}/${id}`
    }

}

export {
    baseURL,
    urls
}