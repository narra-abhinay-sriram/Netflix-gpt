import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null
    },
    reducers:{
        addnowplaying:(state,action)=>{
            state.nowplayingmovies=action.payload
        }
    }
})
export const {addnowplaying}=movieSlice.actions
export default movieSlice.reducer