import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalItems:localStorage.getItem("totalItems") ? JSON.parse("totalItems"):0,
    total: localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        setTotalItems(state,value){
            state.cart = value.payload
        }
    }
}) 

export const {setTotalItems} = cartSlice.actions;
export default cartSlice.reducer;