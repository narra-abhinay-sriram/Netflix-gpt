import { createSlice } from "@reduxjs/toolkit";

const Gptslice=createSlice({
    name:"Gpt",
    initialState:{
        gptstate:false,
    },
    reducers:{
        changeGptstate:(state )=>{
           state.gptstate=!state.gptstate
        }
    }

})
export const {changeGptstate}=Gptslice.actions
export default Gptslice.reducer