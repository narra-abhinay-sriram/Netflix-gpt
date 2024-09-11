import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userslice"
import MovieReducer from "../utils/movieslice"

const appstore=configureStore({
    reducer:{
        user:userReducer,
         movies:MovieReducer
    },
})
export default appstore