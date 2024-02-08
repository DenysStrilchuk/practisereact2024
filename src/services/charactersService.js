import {urls} from "../constants/urls";
import {rickAndMortyAPIService} from "./rickAndMortyAPIService";


const charactersService = {
    getAll: () => rickAndMortyAPIService.get(urls.characters).then(response => response.data.results)
}


export {
    charactersService
}