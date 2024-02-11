import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const usersService = {
    getAll:() => apiService.get(urls.users.base),
    getById:(id) => apiService.get(urls.users.byId),
    create:(data) => apiService.post(urls.users.base, data)
}

export {
    usersService
}