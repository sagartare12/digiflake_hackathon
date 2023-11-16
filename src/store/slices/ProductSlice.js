import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        product:[]
    },
    reducers:{
        addProductReducer(state,action){
            state.push(action.payload)
        },
        allProductReducer(state,action){
            console.log(action.payload)
            state.product={...action.payload}
            console.log(state)
        }
    }
})

export default productSlice.reducer;

export const {addProductReducer,allProductReducer} = productSlice.actions