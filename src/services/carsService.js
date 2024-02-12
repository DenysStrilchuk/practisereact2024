import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carsService = {
    getAll: () => apiService.get(urls.cars.base),
    getById: (id) => apiService.get(urls.cars.byId),
    create: (data) => apiService.post(urls.cars.base, data),
    delete: (data) => apiService.delete(urls.cars.base, data),
    update: (data)
}