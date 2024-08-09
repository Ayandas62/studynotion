import React,{useState} from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../services/operation/authAPI';

const Login = () => {
  const [showPassword,setShowPassword] = useState(false);
  const [formData,setFormData] = useState({
    email:"",
    password:""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {email,password} = formData
  const handleOnChange = (e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault()
    dispatch(login(email,password,navigate))
  }
  return (
    <form action="" onSubmit={handleOnSubmit} className=" flex flex-col gap-5">
        <label htmlFor="" className="">
            <p className="mb-1">Email Address</p>
            <input
            type="email" 
            name="email"
            onChange={handleOnChange}
            value={email}
            placeholder="Enter you Email ID"
            required
            id="email" 
            className="bg-richblack-800 p-3 w-full rounded-lg border-b border-richblack-600"
            />
        </label>
        <label htmlFor="" className="w-full relative">
            <p className="mb-1">Password</p>
            <input
            type={showPassword?"text":"password"} 
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
            value={password}
            required
            id="pass" 
            className="bg-richblack-800 p-3 w-full rounded-lg border-b border-richblack-600"
            />
            <span
            className="absolute right-3 top-[40px] text-2xl"
            onClick={()=>setShowPassword((prev)=>!prev)} >
              {showPassword?<IoEyeOutline/>:<IoEyeOffOutline/>}
            </span>
            <p className="text-blue-50 mt-2 text-[14px]"><Link to="/forgot-password">Forgot password ?</Link></p>
        </label>
        <button type="submit" className="bg-yellow-50 rounded-lg py-[10px] text-lg
         text-richblue-900 transition-all duration-200 hover:scale-95">Login</button>
    </form>
  )
}

export default Login