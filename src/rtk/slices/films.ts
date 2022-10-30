import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";
import { IAllFilms, IFavoritesFilms, IPopularFilms } from "../../Types/types";
import {  getFilms, getPopularFilms } from "../axios";

interface IState {
    favoriteFilms: IFavoritesFilms[],
    allFilms: IAllFilms[],
    currentFilm: IFavoritesFilms | null
    errors: string | null
    message: string | null
    popularFilms: IPopularFilms[]
}

const initialState: IState = {
    favoriteFilms: [],
    allFilms: [
       
    ],
    popularFilms: [],
    currentFilm: null,
    errors: null,
    message: null
}

const films = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addCurrentFilm: (state, action) => {
            state.currentFilm = action.payload
        },
        addToFavorites: (state, action) => {
            const foundFilm = state.favoriteFilms.find(el => el.id === action.payload.id)

            if(!foundFilm) state.favoriteFilms.push(action.payload)

            else {
                state.errors = 'Film is already exist'
            }
        },
        deleteFavorites: (state, action) => {
            state.favoriteFilms = state.favoriteFilms.filter(el => action.payload !== el.id)
        }
    },
    extraReducers: {
        // All films
        [getFilms.pending.toString()]: (state, action) => {
            state.message = 'loading'
        },
        [getFilms.fulfilled.toString()]: (state, action) => {
            state.message = 'fulfilled'
            state.allFilms = action.payload
        },
        [getFilms.rejected.toString()]: (state) => {
            state.message = 'error'
        },
        // Popular films
        [getPopularFilms.pending.toString()]: (state) => {
            state.message = 'loading'
        },
        [getPopularFilms.fulfilled.toString()]: (state, action) => {
            state.message = 'fulfilled'
            state.popularFilms = action.payload
        },
        [getPopularFilms.rejected.toString()]: (state) => {
            state.message = 'error'
        },
    }
})

export const {addCurrentFilm, addToFavorites, deleteFavorites} = films.actions
export default films.reducer