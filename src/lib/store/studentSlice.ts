import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IStudentInitialState } from "./type.store";
const initialStudentData: IStudentInitialState={
    data: ""
}

const studentSLice = createSlice({
    name: "studentSLice",
    initialState: initialStudentData,
    reducers: {
        setData(state: IStudentInitialState,action: PayloadAction<string>){
                state.data = action.payload
        },
        
    }
});
const {setData} = studentSLice.actions;

export {setData}

export default studentSLice;
     
