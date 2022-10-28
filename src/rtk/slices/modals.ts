import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IModals {
    modalAllTrendingMovies: boolean
    WatchMovie: boolean
}

const initialState: IModals = {
    modalAllTrendingMovies: false,
    WatchMovie: false
}

const modals = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        toggleWatchMovieModal: (state) => {
            state.WatchMovie = !state.WatchMovie
        }
    }
})

export const {toggleWatchMovieModal} = modals.actions
export default modals.reducer