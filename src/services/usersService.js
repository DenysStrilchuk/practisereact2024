import {urls} from "../constants/urls";
import {usersAPIService} from "./usersAPIService";


const usersService = {
   getAll: () =>  usersAPIService.get(urls.users)
}


export {
    usersService
}