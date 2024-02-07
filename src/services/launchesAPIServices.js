import axios from "axios";
import {spaceXBaseUrl} from "../constants/urls";

const launchesAPIServices = axios.create({baseURL: spaceXBaseUrl});

export {
    launchesAPIServices
}