import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: () => apiService.get(urls.movie)
}

export {
    movieService
}