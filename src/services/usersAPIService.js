import axios from "axios";
import {usersBaseURL} from "../constants/urls";

const usersAPIService = axios.create({baseURL: usersBaseURL});

export {
    usersAPIService
}