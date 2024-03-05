import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: [
        {id:1, name:'Vasya'},
        {id:2, name:'Kokos'},
        {id:3, name:'Petya'},
    ]
};
const userSlice = createSlice({
    name: 'userSlice',
    initialState
});

const userReducer = userSlice.reducer;
export default userReducer;