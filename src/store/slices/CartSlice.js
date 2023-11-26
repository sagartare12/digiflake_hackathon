import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        userCarts:[]
    },
    reducers:{
        allCartReducer(state,action){
            console.log(action.payload)
            state.cartItems=action.payload
        },
        addCartReducer(state,action){
            console.log(action.payload)
            state.userCarts=action.payload
        }
    }
})

export default cartSlice.reducer;

export const {allCartReducer,addCartReducer}= cartSlice.actions