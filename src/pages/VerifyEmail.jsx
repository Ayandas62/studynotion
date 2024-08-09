import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../services/operation/authAPI';
import OTPInput from 'react-otp-input';

const VerifyEmail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const{signupData,loading} = useSelector((state)=>state.auth)
    const [otp,setOtp] = useState("")
    // const[formData,setFormData] = useState({
    //     otp:""
    // })
    // const handleChange=(e)=>{
    //    setFormData((prev)=>({
    //     ...prev,[e.target.name]:e.target.value
    //    }))
    // }
    const handleSubmit =(e)=>{
        e.preventDefault()
        const{
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType
        } = signupData
        dispatch(signup(
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            otp,
            navigate
        ))
    }
  return (
    <div>
        <div className="text-richblack-5">
            <h1>Verify email</h1>
            <p>A verification code has been sent to you. Enter the code below</p>
            <form action="" onSubmit={handleSubmit}>
                <OTPInput
                numInputs={6}
                onChange={setOtp}
                value={otp}
                renderInput={(props) => <input
                    {...props}
                    placeholder="-"
                    style={{boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
                    className="w-[48px] mr-2 lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] 
                    text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                     />}
                />
                <button type="submit">Verify Email</button>
            </form>
            <Link to="/login">Back to Login</Link>
        </div>
    </div>
  )
}

export default VerifyEmail