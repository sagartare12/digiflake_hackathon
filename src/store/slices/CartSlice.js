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
            
            state.cartItems=action.payload
        },
        addCartReducer(state,action){
            
            state.userCarts=action.payload
        },
        incCartItemReducer(state,action){
            
            state.userCarts=action.payload
        },
        decCartItemReducer(state,action){
      
            state.userCarts=action.payload
        },
        deleteUserItems(state,action){
            console.log(action.payload)
            state.userCarts=action.payload
        },
    }
})

export default cartSlice.reducer;

export const {allCartReducer,addCartReducer,incCartItemReducer,decCartItemReducer,deleteUserItems}= cartSlice.actions