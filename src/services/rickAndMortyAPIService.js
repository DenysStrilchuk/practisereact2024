import axios from "axios";
import {rickAndMortyBaseURL} from "../constants/urls";

const rickAndMortyAPIService = axios.create({baseURL: rickAndMortyBaseURL});

export {
    rickAndMortyAPIService
}