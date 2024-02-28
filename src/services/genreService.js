import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAll:() => apiService.get(urls.genres.base),
    getByGenreId: (genreId, page) => apiService.get(urls.genres.byGenreId(genreId), { params: { page } })
}


export {
    genreService
}