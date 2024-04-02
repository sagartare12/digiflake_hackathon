import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const categorySlice = createSlice({
    name:'category',
    initialState:{
        category:[],
      
    },
    reducers:{
        addCategoryReducer(state,action){
            state.category.push(action.payload)
        },
        allCategoryReducer(state,action){
            console.log(action.payload)
            state.category=action.payload
            console.log(state)
        },
    
   
   
    }
})

export default categorySlice.reducer;

export const {addCategoryReducer,allCategoryReducer} = categorySlice.actions