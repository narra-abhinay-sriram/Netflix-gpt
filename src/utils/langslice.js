import { createSlice } from "@reduxjs/toolkit";

const langslice=createSlice({
    name:"lang",
    initialState:{
        key:"en"

    },
    reducers:{
        changelang:(state,action)=>{
            state.key=action.payload
        }
    }
})

export const {changelang}=langslice.actions
export default langslice.reducer