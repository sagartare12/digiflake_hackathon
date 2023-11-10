import {createSlice} from '@reduxjs/toolkit'

const userSlice =createSlice({
    name:'user',
    initialState:{
        user:{},
},
    reducers:{
        addUser(state,action){
            state.push(action.payload);
            console.log(action.payload)
        },
        loginReducer(state,action){
            state.user=action.payload.loginUser;
        },
        logoutReducer(state,action){
            state.user={}
        }
    }
})

export default  userSlice.reducer;

export const {addUser,loginReducer,logoutReducer} = userSlice.actions;
