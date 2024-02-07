import axios from "axios";
import {usersBaseUrl} from "../constants/urls";

const usersAPIServices = axios.create({baseURL: usersBaseUrl});

export {
    usersAPIServices
}