import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        trailer:null
    },
    reducers:{
        addnowplaying:(state,action)=>{
            state.nowplayingmovies=action.payload
        },
        addtrailer:(state,action)=>{
            state.trailer=action.payload
        }
    }
})
export const {addnowplaying,addtrailer}=movieSlice.actions
export default movieSlice.reducer