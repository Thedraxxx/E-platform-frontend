import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeacherInitialState } from "./type.store";


  const teacherInitialState: ITeacherInitialState ={
        email: "",
        password: ''
  }

 const teacherSlice = createSlice({
    name: "teacherSlice",
    initialState: teacherInitialState,
    reducers: {
        setEmail(state: ITeacherInitialState,action:PayloadAction<string>){
            state.email = action.payload
        },
        setPasswrod(state: ITeacherInitialState,action: PayloadAction<string>){
            state.password = action.payload
        }
    }
  });
  const {setEmail,setPasswrod} = teacherSlice.actions;
  export{ setEmail, setPasswrod}

  export default teacherSlice;
