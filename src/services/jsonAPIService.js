import axios from "axios";
import {jsonBaseURL} from "../components/constants/urls";

const jsonAPIService = axios.create({baseURL: jsonBaseURL})

export {
    jsonAPIService
}