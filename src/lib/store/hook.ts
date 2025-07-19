import { useDispatch,useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// useDispatch and useSelector ma type add garnu paryo ..
const useAppDispatch =useDispatch.withTypes<AppDispatch>();
 const useAppSelector = useSelector.withTypes<RootState>()
export {useAppDispatch,useAppSelector}