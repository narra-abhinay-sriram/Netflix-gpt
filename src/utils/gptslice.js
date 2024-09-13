import { createSlice } from "@reduxjs/toolkit";

const Gptslice=createSlice({
    name:"gpt",
    initialState:{
        gptstate:false,
        gptmovies:null,
        tmdbresults:null
    },
    reducers:{
        changeGptstate:(state )=>{
           state.gptstate=!state.gptstate
        },
        changeonsignout:(state)=>{
    state.gptstate=false
        }
        ,
        addgptmovies:(state,action)=>{
            const {movies,movieresults}=action.payload
            //console.log(movies+"in slice")
            //console.log(movieresults)
         state.gptmovies=movies
         state.tmdbresults=movieresults
        // console.log(state.gptmovies)
//console.log(state.tmdbresults)
        },
        removegptmovies:(state)=>{
            state.gptmovies=null
         state.tmdbresults=null

        }
    }

})
export const {changeGptstate,addgptmovies,removegptmovies,changeonsignout}=Gptslice.actions
export default Gptslice.reducer