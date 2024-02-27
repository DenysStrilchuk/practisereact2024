import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAll:() => apiService.get(urls.genres.base),
    getByGenreId: (genreId) => apiService.get(urls.genres.byGenreId(genreId))
}


export {
    genreService
}