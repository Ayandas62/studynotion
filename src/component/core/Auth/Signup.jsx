import React,{useState} from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSignupData } from '../../../slices/AuthSlice';
import { sendOTP } from '../../../services/operation/authAPI';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword,setShowPassword] = useState(false);
  const [accountType,setAccountType] = useState("Student");
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const{firstName,lastName,email,password,confirmPassword} = formData

  const handleOnChange = (e)=>{
    setFormData((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const signupData = {
      ...formData,
      accountType
    }
    dispatch(setSignupData(signupData))
    dispatch(sendOTP(formData.email,navigate))

    setFormData({
      firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
    })
    setAccountType("Student")
  }

  return (
    <form action="" onSubmit={handleSubmit} className=" flex flex-col gap-5">
      <div className=" bg-richblack-700 p-1 gap-1 flex items-center w-fit rounded-3xl">
          <button onClick={()=>setAccountType("Student")}
          className={accountType==="Student"?"bg-richblack-900 px-3 py-2 rounded-3xl":
          " px-3 py-2 rounded-3xl"}>Student</button>

          <button onClick={()=>setAccountType("Instructor")}  
          className={accountType==="Instructor"?"bg-richblack-900 px-3 py-2 rounded-3xl":
          " px-3 py-2 rounded-3xl"}>Instructor</button>
      </div>
      <div className="flex gap-3 justify-between">
      <label htmlFor="" className=" w-full">
          <p className="mb-1">First Name</p>
          <input
          type="text" 
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={handleOnChange}
          required
          className="bg-richblack-800 p-3 w-full rounded-lg border-b border-richblack-600"
          />
      </label>
      <label htmlFor="" className="w-full">
          <p className="mb-1">Last Name</p>
          <input
          type="text" 
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={handleOnChange}
          required
          className="bg-richblack-800 p-3 w-full rounded-lg border-b border-richblack-600"
          />
      </label>
      </div>
      <label htmlFor="" className="">
          <p className="mb-1">Email Address</p>
          <input
          type="email" 
          name="email"
          placeholder="Enter you Email ID"
          value={email}
          onChange={handleOnChange}
          required
          className="bg-richblack-800 p-3 w-full rounded-lg border-b border-richblack-600"
          />
      </label>
      <div className="flex gap-4">
        <label htmlFor="" className="w-full relative">
            <p className="mb-1">Password</p>
            <input
            type={showPassword?"text":"password"} 
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleOnChange}
            required
            className="bg-richblack-800 p-3 w-full rounded-lg border-b border-richblack-600"
            />
            <span
            className="absolute right-3 top-[40px] text-2xl"
            onClick={()=>setShowPassword((prev)=>!prev)} >
              {showPassword?<IoEyeOutline/>:<IoEyeOffOutline/>}
            </span>
        </label>
        <label htmlFor="" className="w-full relative">
          <p className="mb-1">Confirm Password</p>
          <input
          type={showPassword?"text":"password"} 
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleOnChange}
          required
          className="bg-richblack-800 p-3 w-full rounded-lg border-b border-richblack-600"
          />
          <span
          className="absolute right-3 top-[40px] text-2xl"
          onClick={()=>setShowPassword((prev)=>!prev)} >
            {showPassword?<IoEyeOutline/>:<IoEyeOffOutline/>}
          </span>
          
      </label>
      </div>
      
      <button type="submit" className="bg-yellow-50 rounded-lg py-[10px] text-lg text-richblue-900 transition-all duration-200 hover:scale-95">Sign Up</button>
  </form>
  )
}

export default Signup