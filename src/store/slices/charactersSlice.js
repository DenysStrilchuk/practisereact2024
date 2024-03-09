import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState =  {
    characters: []
}

const getByIds = createAsyncThunk(
    'createSlice/getByIds',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await (characterService.getByIds(ids))
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.results.data)
        }
    }
)

const charactersSlice = createSlice({
    name: 'createSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getByIds.fulfilled, (state, actions) => {
                state.characters = actions.payload;
            })
})

const {reducer: charactersReducer, actions} = charactersSlice;
const characterActions = {
    ...actions,
    getByIds
}

export {
    charactersReducer,
    characterActions
}