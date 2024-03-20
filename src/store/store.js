import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import productSlice from './slices/ProductSlice'
import CartSlice from './slices/CartSlice'
import routerSlice from "./slices/RouterSlice"

const store = configureStore({
    reducer:{
        users:userSlice,
        products:productSlice,
        cas:productSlice,
        carts :CartSlice,
        routers:routerSlice,
    }
})

export default store