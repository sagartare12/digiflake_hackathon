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
            console.log(action.payload)
            state.user=action.payload.loginUser;
        },
        logoutReducer(state,action){
            console.log(action.payload)
            console.log("lo")
            state.user={}
        },
        logoutRedu(state,action){
            state.user={}
        },

    }
})

export default  userSlice.reducer;

export const {addUser,loginReducer,logoutReducer,logoutRedu} = userSlice.actions;
