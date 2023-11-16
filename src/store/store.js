import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import productSlice from './slices/ProductSlice'
const store = configureStore({
    reducer:{
        users:userSlice,
        products:productSlice,
        cas:productSlice
    }
})

export default store