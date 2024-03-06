import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [
        {id:1, brand:'BMW'},
        {id:2, brand:'Audi'},
        {id:3, brand:'KIA'}
    ]
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState
});

const carReducer  = carSlice.reducer;

export default carReducer;