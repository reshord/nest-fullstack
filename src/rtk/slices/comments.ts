import {createSlice} from '@reduxjs/toolkit'

interface IComments {
    userName: string
    text: string
}

interface IState {
    comments: IComments[]
}

const initialState: IState = {
    comments: []
}

const commentsSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        
    }
})
  
export default commentsSlice.reducer