import React,{useState} from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/operation/authAPI';

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {loading}= useSelector((state)=>state.auth)
    const [showPassword,setShowPassword] = useState(false);

    const [formdata,setFormData] = useState({
        password:"",
        confirmPassword:""
    })
    const{password,confirmPassword} = formdata;

    const handleOnChange= (e)=>{
        setFormData((prev)=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }
    const token = location.pathname.split("/").at(-1)
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(resetPassword(password,confirmPassword,token,navigate))
    }
  return (
    <div className="text-richblack-5 min-h-screen flex items-center justify-center">
        {loading?
            <div className="spinner">Loading...</div> :
            
            <div className="flex flex-col gap-5">
            <h1 className="text-4xl">Choose  new password</h1>
            <p>Almost done. Enter your new password and youre all set.</p>
            <form action="" onSubmit={submitHandler} className="flex flex-col gap-5">
                <label htmlFor="" className="relative">
                    <p>New Password</p>
                    <input 
                    className="bg-richblack-700 w-full p-3 rounded-lg border-b border-richblack-300"
                    type={showPassword ? "text":"password"} 
                    name="password" 
                    value={password}
                    onChange={handleOnChange}
                    />
                    <span className="absolute right-3 top-[50%] text-2xl" onClick={()=>setShowPassword((prev)=>!prev)}>
                        {
                            showPassword?<IoEyeOutline/>:<IoEyeOffOutline/>
                        }
                    </span>
                </label>
                <label htmlFor="" className="relative">
                    <p>Confirm New Password</p>
                    <input 
                    className="bg-richblack-700 w-full p-3 rounded-lg border-b border-richblack-300"
                    type={showPassword ? "text":"password"} 
                    name="confirmPassword" 
                    value={confirmPassword}
                    onChange={handleOnChange}
                    />
                    <span className="absolute right-3 top-[50%] text-2xl" onClick={()=>setShowPassword((prev)=>!prev)}>
                        {
                            showPassword?<IoEyeOutline/>:<IoEyeOffOutline/>
                        }
                    </span>
                </label>
                <button type="submit" className="bg-[#FFD60A] w-full py-3 rounded-lg text-richblack-900">Reset Password</button>
            </form>
        </div>
    }
        
    </div>
  )
}

export default UpdatePassword