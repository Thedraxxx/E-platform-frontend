import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../types/type";
import { IInitialState } from "./userSlice-types";
import { IUserData } from "./userSlice-types";
import { AppDispatch } from "../store";

const initialState: IInitialState = {
  user: {
    email: "",
    password: "",
  },
  status: Status.LOADING,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state: IInitialState, action: PayloadAction<IUserData>) => {
      state.user = action.payload;
    },
    setStatus: (state: IInitialState, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
  },
});
export const { setUser, setStatus } = authSlice.actions;
export default authSlice.reducer


function login(data){
  return async function loginThunk(dispatch: AppDispatch){
           try {
                
           } catch (error) {
            
           }
  }
}

