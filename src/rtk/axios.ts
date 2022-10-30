import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import { IPopularFilms } from '../Types/types';

export const getFilms = createAsyncThunk('films',
async () => {
        try {
            const data = await axios.get('http://localhost:4000/films').then(res => res.data)
            
            return data
        
        }catch(e) {
            console.log(e);
            
        }
})

export const getPopularFilms = createAsyncThunk('populars',
async () => {
        try {
            const data = await axios.get<IPopularFilms[]>('http://localhost:4000/films/popular').then(res => res.data)

            return data
        }catch(e) {
            console.log(e);
            
        }
})