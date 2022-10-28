import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: null,
    isAuth: false
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
    }
})

export default auth.reducer