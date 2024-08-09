import toast from "react-hot-toast";
import { setLoading, setToken } from "../../slices/AuthSlice";
import { apiConnector } from "../apiConnector";
import { endPoint } from "../apis";
import { setUser } from "../../slices/ProfileSlice";

const {
    RESETPASSWORD_API,
    RESETPASSTOKEN_API,
    LOGIN_API,
    SIGNUP_API,
    SENDOTP_API
} = endPoint

export function signup(
    firstName,lastName,email,password,
    confirmPassword,accountType,otp,navigate
    ){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        const toastId = toast.loading('Loading...')
        try{
            const response = await apiConnector("POST",SIGNUP_API,{
                firstName,lastName,email,password,
                confirmPassword,accountType,otp,navigate
            })
            console.log("Signup Data -->",response)
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("Signup Successfull")
            navigate("/login")
        }catch(error){
            console.log("error while signup",error);
            toast.error("Signup failed")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function sendOTP(email,navigate){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        const toastId = toast.loading("loading");
        try{
            const response = await apiConnector("POST",SENDOTP_API,{
                email,
                existUser:true
            })
            console.log("response->",response);
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("OTP sent successfully");
            navigate("/verify-email")
        }catch(error){
            console.log(error);
            toast.error("Error in OTP sent")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}
export function login(email,password,navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST",LOGIN_API,{email,password,navigate});
            console.log("Login data -->",response);

            if(!response.data.succcess){
                throw new Error(toast.error(response.data.message))
            }
            toast.success("Login successfull");
            
                dispatch(setToken(response.data.token))
                const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      dispatch(setUser({ ...response.data.user, image: userImage }))
      console.log(response.data.user)
                localStorage.setItem("token",JSON.stringify(response.data.token));
                localStorage.setItem("user",JSON.stringify(response.data.user));
                navigate("/dashboard/my-profile")
           
        }catch(err){
            console.log("error in login -->",err)
            toast.error("Login failed");
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId);
    }
}


export function getResetPasswordToken(email,setEmailSent){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        try{
            const response= await apiConnector("POST",RESETPASSTOKEN_API,{email})
            console.log("reset password token response",response)
            if(!response.data.success){
                throw new Error(response.data.message);
                //toast.error(response.data.message)
            }
            toast.success("Reset email sent");
            setEmailSent(true)
        }catch(err){
            console.log("reset password token",err);
            toast.error("Failed")
        }
        dispatch(setLoading(false))
    }
}

export function resetPassword (password,confirmPassword,token,navigate){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        try{
            const response = await apiConnector("POST",RESETPASSWORD_API,
                {password,confirmPassword,token,navigate})
            console.log("Reset password response-->",response)
            if(!response.data.success){
                throw new Error(response.data.message)
            }
            toast.success("Password Changed Successfully");
        }catch(err){
            console.log("errorin reset password-->",err);
            toast.error("error in change password")
        }
        dispatch(setLoading(false))
    }
}

export function logout(navigate){
    return(dispatch)=>{
        dispatch(setToken(null))
        dispatch(setUser(null))
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("Logged out");
        navigate("/")
    }
}