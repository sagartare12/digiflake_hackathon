import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import productSlice from './slices/ProductSlice'
import CartSlice from './slices/CartSlice'
import routerSlice from "./slices/RouterSlice"
import categorySlice from "./slices/CategorySlice"
const store = configureStore({
    reducer:{
        users:userSlice,
        products:productSlice,
        cas:productSlice,
        carts :CartSlice,
        routers:routerSlice,
        category:categorySlice
    }
})

export default store
