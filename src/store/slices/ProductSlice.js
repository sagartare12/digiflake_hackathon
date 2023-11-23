import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
            const total = action.payload.price;
            state.cartItem= [...state.cartItem,{...action.payload,qty:1,total:total}]
            console.log(state.cartItem)
        },
        deleteCartItems:(state,action)=>{
            console.log(action.payload)

            const index= state.cartItem.findIndex((el)=>el._id === action.payload)
            console.log(index)

            state.cartItem.splice(index,1)
                toast.error("Item deleted")           
        },
        inacreaseQty(state,action){

        },
        decreaseQty(state,action){

        }
    }
})

export default productSlice.reducer;

export const {addProductReducer,allProductReducer,addCartItems,deleteCartItems,inacreaseQty,decreaseQty} = productSlice.actions