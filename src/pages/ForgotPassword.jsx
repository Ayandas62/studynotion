import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getResetPasswordToken } from '../services/operation/authAPI';


const ForgotPassword = () => {

    const dispatch = useDispatch();
    const [emailSend,setEmailSend] = useState(false);
    const [email,setEmail] = useState("")
    const {loading} = useSelector((state)=>state.auth)

    const submitHandler = (e)=>{
      e.preventDefault()
      dispatch(getResetPasswordToken(email,setEmailSend))
    }


  return (
    <div className="text-richblack-5 min-h-screen justify-center flex items-center">
      {
        loading?
        <div>Loading...</div>:
        <div className="w-[30%] flex flex-col gap-4">
          <h1 className="text-4xl">
            {
              !emailSend ? "Reset your password" : "Check email"
            }
          </h1>
          <p className="text-richblack-200">
            {
              !emailSend ? `Have no fear. We’ll email you instructions to reset your password.
              If you dont have access to your email we can try account recovery`:
              `We have sent the reset email to ${email}`
            }
          </p>
          <form onSubmit={submitHandler} action="" className="flex flex-col gap-2">
            {
              !emailSend &&(
                <label htmlFor="">
                  <p className="font-semibold mb-1">Email Address*</p>
                  <input
                  className="bg-richblack-800 p-3 w-full rounded-lg border-b border-richblack-600"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  placeholder="enter your email"
                  />
                </label>
              )
            }
            <button type="submit" className="bg-yellow-50 rounded-lg py-[10px] text-lg
             text-richblue-900 transition-all duration-200 hover:scale-95">
              {!emailSend?"Reset password":"Resend email"}
            </button>
          </form>
          <div className="">
            <Link to="/login">
              <p>Back to login</p>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}

export default ForgotPassword