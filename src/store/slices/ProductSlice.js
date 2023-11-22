import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        product:[],
        cartItem:[],
    },
    reducers:{
        addProductReducer(state,action){
            state.product.push(action.payload)
        },
        allProductReducer(state,action){
            console.log(action.payload)
            state.product=action.payload
            console.log(state)
        },
        addCartItems(state,action){
            console.log(action.payload)
            const total = action.payload.price;
            state.cartItem= [...state.cartItem,{...action.payload,qty:1,total:total}]
        },
        deleteCartItems(state,action){

        }
    }
})

export default productSlice.reducer;

export const {addProductReducer,allProductReducer,addCartItems,deleteCartItems} = productSlice.actions