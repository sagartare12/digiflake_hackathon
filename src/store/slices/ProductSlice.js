import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        product:{}
    },
    reducers:{
        addProductReducer(state,action){
            state.push(action.payload)
        }
    }
})

export default productSlice.caseReducers;

export const {addProductReducer} = productSlice.actions