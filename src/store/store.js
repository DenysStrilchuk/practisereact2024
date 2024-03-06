import {configureStore} from '@reduxjs/toolkit';

import carReducer from "./slices/car.slices";
import userReducer from "./slices/user.slices";

const store = configureStore({
    reducer: {
        car: carReducer,
        user: userReducer
    }
})

export default store;