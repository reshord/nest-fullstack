import React from "react";
import {configureStore} from '@reduxjs/toolkit'
import commentsSlice from '../rtk/slices/comments'
import auth from '../rtk/slices/auth'
import modals from '../rtk/slices/modals'
import films from '../rtk/slices/films'

const store = configureStore({
    reducer: {
        commentsSlice,
        auth,
        modals,
        films
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDisptach = typeof store.dispatch 