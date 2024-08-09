import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice";
import CartSlice from "../slices/CartSlice";
import ProfileSlice from "../slices/ProfileSlice";
import  courseReducer  from "../slices/courseSlice";

const rootReducer = combineReducers({
    auth:authReducer,
    cart:CartSlice,
    profile:ProfileSlice,
    course:courseReducer,
})

export default rootReducer