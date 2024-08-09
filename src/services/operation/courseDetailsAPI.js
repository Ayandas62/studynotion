import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { courseEndpoints } from "../apis"

const {COURSE_CATEGORIES_API,
    CREATE_COURSE_API
}=courseEndpoints

export const showAllCategory = async()=>{
    let result =[]
        try{
            const response = await apiConnector("GET",COURSE_CATEGORIES_API)
            // if(!response?.data?.success){
            //     throw new Error("Could Not Fetch Course Categories",response)
            // }
            console.log(response)
            result = response?.data?.data
        }catch(err){
            console.log(err)
        }
        return result
}

export const addCourseDetails = async(data,token)=>{
    let result = null
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST",CREATE_COURSE_API,{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
        })
        if (!response?.data?.success) {
            throw new Error("Could Not Add Course Details")
          }
          toast.success("Course Details Added Successfully")
          result = response?.data?.data
    }catch(err){
        console.log(err);
        toast.error(err.message);
    }
    toast.dismiss(toastId)
    return result
}