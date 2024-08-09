import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    step:1,
    course:null,
    editCourse:false,
    payment:false
}

const courseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{
        setStep:(state,action)=>{
            state.step = action.payload
        },
        setCourse:(state,action)=>{
            state.course = action.payload
        },
        setEditCourse:(state,action)=>{
            state.editCourse = action.payload
        },
        setPayment:(state,action)=>{
            state.payment= action.payload
        },
        resetCourseState: (state) => {
            state.step = 1
            state.course = null
            state.editCourse = false
          },
    }
})

export const {setStep,setCourse,setEditCourse,setPayment,resetCourseState} = courseSlice.actions;
export default courseSlice.reducer