import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    characters: []
}

const getByIds = createAsyncThunk(
    'charactersSlice/getByIds',
    async ({ids},thunkAPI) => {
        try {
            const {data} = await characterService.getByIds(ids)
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const charactersSlice = createSlice({
    name:'createSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getByIds.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.characters = results
            })
})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersAction = {
    ...actions,
    getByIds
}

export {
    charactersReducer,
    charactersAction
}