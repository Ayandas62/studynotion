import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import CtaButton from '../../../common/CtaButton';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../../../services/operation/profileAPI';


const ChangePassword = () => {

  const [showCurPassword,setShowCurPassword] = useState(false);
  const [showNewPassword,setShowNewPassword] = useState(false);
  const [showConPassword,setShowConPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {token} = useSelector((state)=>state.auth)

  const {
    register,
    handleSubmit,
    formState:{errors}
  }= useForm()

  const submitHandler = async(data)=>{
    dispatch(changePassword(token,data))
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} action="">
      <div className=" text-richblack-5 bg-richblack-800 rounded-lg w-10/12 mx-auto mt-10 p-8">
        <h2 className="text-2xl font-semibold mb-5">Password</h2>
        <div className="flex gap-3">
          <div className="relative flex flex-col w-full">
            <label className="lable-style" htmlFor="oldPassword">Current Password</label>
            <input type={showCurPassword?"text":"password"}
            name="oldPassword" 
            id=""
            placeholder="Enter Current password"
            className="form-style"
            {...register("oldPassword",{required:true})}
            />
            {
              errors.oldPassword && (
                <span className="text-yellow-100 text-sm">Please Enter old password</span>
              )
            }
            <span className="absolute right-2 top-[55%] text-xl" onClick={()=>setShowCurPassword((prev)=>!prev)}>
              {
                showCurPassword?<IoEyeOffOutline/>:<IoEyeOutline/>
              }
            </span>
          </div>
          <div className="relative flex w-full flex-col">
            <label className="lable-style" htmlFor="oldPassword">New Password</label>
            <input type={showNewPassword?"text":"password"}
            name="newPassword" 
            id="newPassword"
            placeholder="Enter New password"
            className="form-style"
            {...register("newPassword",{required:true})}
            />
            {
              errors.newPassword && (
                <span className="text-yellow-100 text-sm">Please Enter New password</span>
              )
            }
            <span className="absolute right-2 top-[55%] text-xl" onClick={()=>setShowNewPassword((prev)=>!prev)}>
              {
                showNewPassword?<IoEyeOffOutline/>:<IoEyeOutline/>
              }
            </span>
          </div>

          <div className="relative flex w-full flex-col">
            <label className="lable-style" htmlFor="conPassword">Confirm Password</label>
            <input type={showConPassword?"text":"password"}
            name="conPassword" 
            id="conPassword"
            placeholder="Re-Enter New password"
            className="form-style"
            {...register("conPassword",{required:true})}
            />
            {
              errors.conPassword && (
                <span className="text-yellow-100 text-sm">Please Re-Enter New password</span>
              )
            }
            <span className="absolute right-2 top-[55%] text-xl" onClick={()=>setShowConPassword((prev)=>!prev)}>
              {
                showConPassword?<IoEyeOffOutline/>:<IoEyeOutline/>
              }
            </span>
          </div>
        </div>
        <div className="mt-5 flex gap-3 justify-end">
          <button
          onClick={()=>navigate("/dashboard/my-profile")}
          className="px-4 py-2 bg-richblack-700 rounded-lg hover:bg-richblack-900">
            Cancel
          </button>
          <CtaButton type="submit" text={"Change"}/>
        </div>
      </div>
    </form>
  )
}

export default ChangePassword