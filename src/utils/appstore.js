import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userslice"
import MovieReducer from "../utils/movieslice"
import GptReducer from "../utils/gptslice"

const appstore=configureStore({
    reducer:{
        user:userReducer,
         movies:MovieReducer,
         gpt:GptReducer
    },
})
export default appstore