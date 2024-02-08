import {urls} from "../constants/urls";
import {rickAndMortyAPIService} from "./rickAndMortyAPIService";


const charactersService = {
    getAll: () => rickAndMortyAPIService.get(urls.characters)
}


export {
    charactersService
}