import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => apiService.get(urls.comments.base),
    getById: (id) => apiService(urls.comments.byId(id)),
    create: (data) => apiService.get(urls.comments.base, data)

}