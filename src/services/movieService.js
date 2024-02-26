import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: (page) => apiService.get(urls.movie.base, {params:{page}}),
    getByMovieId: (movieId) => apiService.get(urls.movie.byId(movieId))
}

export {
    movieService
}