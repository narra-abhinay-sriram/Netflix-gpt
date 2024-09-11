import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        trailer:null,
        popular:null,
        toprated:null,
        upcoming:null,
        topseries:null,
        popularseries:null
    },
    reducers:{
        addnowplaying:(state,action)=>{
            state.nowplayingmovies=action.payload
        },
        addtrailer:(state,action)=>{
            state.trailer=action.payload
        },
        addpopular:(state,action)=>{
            state.popular=action.payload
        },
        addtoprated:(state,action)=>{
            state.toprated=action.payload
        },
        addupcoming:(state,action)=>{
            state.upcoming=action.payload
        },
        addtopseries:(state,action)=>{
            state.topseries=action.payload
        },
        addpopularseries:(state,action)=>{
            state.popularseries=action.payload
        }
    }
})
export const {addnowplaying,addtrailer,addpopular,addtoprated,addupcoming,addtopseries,addpopularseries}=movieSlice.actions
export default movieSlice.reducer