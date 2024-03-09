import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    episodes: [],
    next: null,
    prev: null
}

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await (episodeService.getAll(page));
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name:'createSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {next, prev}, results} = action.payload;
                state.next = next;
                state.prev = prev;
                state.episodes = results;
            })
})

const {reducer: episodeReducer, actions} = episodesSlice;

const episodeActions = {
    ...actions,
    getAll

}

export {
    episodeReducer,
    episodeActions
}