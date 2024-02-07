import {launchesAPIServices} from "./launchesAPIServices";
import {urls} from "../constants/urls";

const launchesServices = {
    getAll: () => launchesAPIServices.get(urls.launches)
}


export {
    launchesServices
}