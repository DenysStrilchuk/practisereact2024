import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    prev: null,
    next: null,
    results: []
}

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page},thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder.addCase()
})

const {reducer: episodesReducer, actions} = episodesSlice;

const episodesAction = {
    ...actions
}

export {
    episodesReducer,
    episodesAction
}