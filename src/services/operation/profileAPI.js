import toast from "react-hot-toast";
import { setLoading } from "../../slices/AuthSlice";
import { apiConnector } from "../apiConnector";
import { profileEndPoint } from "../apis";
import { setUser } from "../../slices/ProfileSlice";
import { logout } from "./authAPI";

const {UPDATE_PROFILE_API,
    CHANGE_PASSWORD_API,
    DELETE_ACCOUNT_API,
    GET_ENROLLED_COURSE
} = profileEndPoint

export function updateProfile (token,data){
    return async (dispatch)=>{
        dispatch(setLoading(true))
            const toastId = toast.loading("Loading...")
            console.log("token->",token)
            try{
                const response = await apiConnector("PUT",UPDATE_PROFILE_API,data,{
                    
                        Authorization: `Bearer ${token}`,
                    
                })
                console.log("response",response.data.data)
                if(!response.data.success){
                    throw new Error (response.data.message)
                }
                // const userImage = response.data.updatedUserDetails.image
                // ? response.data.updatedUserDetails.image
                // : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
                try{
                    dispatch(setUser({...response.data.data}))
                    localStorage.setItem("user",JSON.stringify(response.data.data));
                }catch(err){
                    console.log(err)
                }
                // console.log(response.data.updatedUserDetails)
                // window.location.reload();
                toast.success("successfully update data")
            }catch(err){
                console.log(err)
                toast.error("Failed")
            }
            dispatch(setLoading(false))
            toast.dismiss(toastId)
    }
    
}


export function changePassword(token,data){

   return async(dispatch)=>{
    const toastId = toast.loading("Loading...")
    console.log("token-->",token)
    try{
        const response = await apiConnector("POST",CHANGE_PASSWORD_API,data,{
            Authorization:`Bearer ${token}`
        })
        if(!response.data.success){
            throw new Error(response.data.message)
        }

        toast.success("Successfully Password Changed")
    }catch(err){
        console.log("Error while change Password")
        toast.error("Failed to change password")
    }
    toast.dismiss(toastId)
    }
}

export function deleteAccount(token,navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...")
        try{
            const response = apiConnector("DELETE",DELETE_ACCOUNT_API,null,{
                Authorization:`Bearer ${token}`
            })
            console.log(response)
            // if(!response.data.success){
            //     throw new Error(response.data.message)
            // }
            dispatch(logout(navigate))
        }catch(err){
            console.log(err);
        }
        toast.dismiss(toastId)
    }
}

export function getEnrolledCourses(token){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...")
        try{
            const response = await apiConnector("GET",GET_ENROLLED_COURSE,null,{
                Authorization : `Bearer ${token}`
            })

            if(!response.data.success){
                throw new Error(response.data.message)
            }

            toast.success("All Enrolled Course")
        }catch(err){
            console.log(err);
            toast.error("Failed")
        }
        toast.dismiss(toastId)
    }
}