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
            const isItemPresent= state.cartItem.findIndex((el)=>el._id === action.payload._id);
            const total = action.payload.price;
            if(isItemPresent<0) state.cartItem= [...state.cartItem,{...action.payload,qty:1,total:total}]        
        },
        deleteCartItems:(state,action)=>{
            const index= state.cartItem.findIndex((el)=>el._id === action.payload)
            state.cartItem.splice(index,1)
                toast.error("Item deleted")           
        },
        inacreaseQty(state,action){
            const index= state.cartItem.findIndex((el)=>el._id === action.payload);
            let qty=state.cartItem[index].qty;
            state.cartItem[index].qty=++qty;
            let total =state.cartItem[index].price
            state.cartItem[index].total=total*qty;
        },
        decreaseQty(state,action){
            const index= state.cartItem.findIndex((el)=>el._id === action.payload);
            let qty=state.cartItem[index].qty;
            if(qty>0) {
                state.cartItem[index].qty=--qty;
                let total =state.cartItem[index].total
                state.cartItem[index].total=total-state.cartItem[index].price;
                }
        }
    }
})

export default productSlice.reducer;

export const {addProductReducer,allProductReducer,addCartItems,deleteCartItems,inacreaseQty,decreaseQty} = productSlice.actions