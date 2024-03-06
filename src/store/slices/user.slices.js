import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [
        {id:1, name: 'Vasya'},
        {id:2, name: 'Ira'},
        {id:3, name: 'Olia'}
    ]
};

const userSlice = createSlice({
    name: 'createSlice',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = action.payload.user;
            state.users.push(user);
        }
    }
});

const userReducer = userSlice.reducer;

export const {addUser} = userSlice.actions;
export default userReducer;