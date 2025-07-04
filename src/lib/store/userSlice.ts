import { createSlice } from "@reduxjs/toolkit";


const userInitialState = {
    name: '',
    email: ''
}
const userSlice =createSlice({
    name: "userSlice",
    initialState: userInitialState,
    reducers: {
        setName(state,action){
               state.name = action.payload
        },
        setEmail(state,action){
             state.email = action.payload
        }
    }
});

export default userSlice;

const {setName,setEmail} = userSlice.actions;

export{setEmail,setName}