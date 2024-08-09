import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CtaButton from '../../../common/CtaButton';
import { updateProfile } from '../../../../services/operation/profileAPI';

const UpdateProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state)=>state.auth);
    // console.log(user)
    const{
        register,
        handleSubmit,
        formState:{errors}
    }=useForm()
    
    const submitProfileForm = async(data)=>{
      console.log(token)
      try{
        dispatch(updateProfile(token,data))
      }catch(err){
        console.log(err)
      }
      
    }

  return (
    <form action="" onSubmit={handleSubmit(submitProfileForm)}>
      <div className="border-[1px] w-10/12 mx-auto rounded-lg flex flex-col gap-6 text-richblack-5 p-8 bg-richblack-800 border-richblack-800">
        <h2 className="text-2xl mb-5 font-semibold">Personal Details</h2>
        <div className="flex w-full flex-col gap-5">
        <div className="flex w-full gap-5 ">
          <div className="flex w-full flex-col">
            <label htmlFor="firstName" className="lable-style">
              First Name
            </label>
            <input 
            type="text" 
            name="firstName" 
            id="firstName"
            placeholder="Enter First Name"
            className="form-style"
            {...register("firstName",{required:true})}
            defaultValue={user?.firstName}
            />
            {errors.firstName&&(
              <span className="text-yellow-100 text-sm">
                please enter First Name
              </span>
            )}
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="firstName" className="lable-style">
              Last Name
            </label>
            <input 
            type="text" 
            name="lastName" 
            id="lastName"
            placeholder="Enter Last Name"
            className="form-style w-full"
            {...register("lastName",{required:true})}
            defaultValue={user?.lastName}
            />
            {
              errors.lastName && (
                <span className="text-yellow-100 text-sm">
                  Please enter last name
                </span>
              )
            }
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="dateOfBirth" className="lable-style">
              Date of Birth
            </label>
            <input 
            type="date" 
            name="dateOfBirth" 
            id="dateOfBirth"
            className="form-style"
            {
              ...register("dateOfBirth",{
                required:{
                  value:true,
                  message:"Date of birth required"
                },
                max:{
                  value:new Date().toISOString().split("T")[0],
                  message:"Date of birth cannot be future"
                }
              })
            }
            defaultValue={user?.additionalDetails?.dateOfBirth}
            />
            {errors.dateOfBirth&&(
              <span className="text-yellow-100 text-sm">{errors.dateOfBirth.message}</span>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="gender">
              Gender
            </label>
            <select 
            name="gender" 
            id="gender"
            className="form-style w-full"
            {
              ...register("gender",{required:true})
            }
            defaultValue={user?.additionalDetails?.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {
              errors.gender&& (
                <span className="text-yellow-100 text-sm">
                  Please Enter your gender
                </span>
              )
            }
          </div>
        </div>
        <div className="flex gap-5">
            <div className="flex flex-col w-full">
              <label htmlFor="contactNumber">
                Contact Number
              </label>
              <input 
              type="number" 
              name="contactNumber" 
              id="contactNumber"
              className="form-style"
              {...register("contactNumber",{
                required:{
                  value:true,
                  message:"Please enter your contact number"
                },
                minLength:{value:10,message:"Invalid Number"},
                maxLength:{value:12,message:"Invalid Number"}
              })}
              defaultValue={user?.additionalDetails?.contactNumber}
              />
              {
                errors.contactNumber&&(
                  <span className="text-yellow-100 text-sm">{errors.contactNumber.message}</span>
                )
              }
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="about">About</label>
              <input 
              type="text" 
              name="about" 
              id="about"
              placeholder="Add your Bio"
              className="form-style"
              {
                ...register("about",{required:true})
              }
              defaultValue={user?.additionalDetails?.about}
              />
              {
                errors.about&&(
                  <span className="text-yellow-100 text-sm">Please Enter Bio</span>
                )
              }
            </div>
        </div>
        </div>
        <div className="flex justify-end gap-2">
          <button 
          onClick={()=>{
            navigate("/dashboard/my-profile")
          }}
          className="px-4 py-2 bg-richblack-700 rounded-lg hover:bg-richblack-900"
          >
            Cancel
          </button>
          <CtaButton type="submit" text={"Save"} />
        </div>
      </div>
    </form>
  )
}

export default UpdateProfile