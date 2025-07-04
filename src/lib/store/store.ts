import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
       reducer: {
          
       }
});

export default store

export type AppDispatch = typeof store.dispatch; //paxi suggestion , compile time error ,type safty haru dinxa 

// flow of this ...

//1) customer la momo order garxa --> dispatch(setOrder("momo"))

//2) yo order kitchen ma pugxa ra kam suru gar vanara order aauxa --> 
// ani yo dispatch la chi slice ko action lai trigger garxa ra reducer run hunxa. 
// -->reducers: {
//   setOrder(state, action) {
//     state.food = action.payload; // "momo"

//3) kitche la momo banauxa --> state change hunxa --> state.food = "momo";

//4) momo customer ko table ma janxa --> UI update hunxa majala 
// -->const food = useSelector(state => state.order.food);
//     return <h1>{food}</h1>;  // momo display huncha
