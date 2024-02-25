import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: (page) => apiService.get(urls.movie, {params:{page}})
}

export {
    movieService
}