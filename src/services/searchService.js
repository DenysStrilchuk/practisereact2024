import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService = {
    getAll: (query) => apiService.get(urls.search.base, { params: { query } })
}


export {
    searchService
}