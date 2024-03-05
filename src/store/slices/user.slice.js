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
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = action.payload.user;
            state.users.push(user)
        }
    }
});

const userReducer = userSlice.reducer;
export const {addUser} = userSlice.actions;
export default userReducer;