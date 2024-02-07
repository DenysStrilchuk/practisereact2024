import {usersAPIServices} from "./usersAPIServices";
import {urls} from "../constants/urls";

const usersService = {
    getAll: () => usersAPIServices.get(urls.users)
}

export {
    usersService
}