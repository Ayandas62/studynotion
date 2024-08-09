import React from 'react'
import { useSelector } from 'react-redux'
import CtaButton from '../../common/CtaButton'
import { Link, useNavigate } from 'react-router-dom'

const Myprofile = () => {
  const {user} = useSelector((state)=>state.profile)
  const navigate = useNavigate()
  return (
    <div className=" w-10/12 mx-auto gap-10 text-richblack-5 flex flex-col ">
      <div className="">
        <h1 className="text-4xl font-semibold mt-5">My Profile</h1>
      </div>
      {/* name & email  */}
      <div className="flex bg-richblack-800 rounded-xl p-10 justify-between">
        <div className="flex items-center gap-4">
          <img src={user.image} className="w-[80px] rounded-full" alt="" />
          <div className="">
            <p className="text-lg font-semibold">{user.firstName}</p>
            <p className="text-richblack-200">{user.email}</p>
          </div>
        </div>
        <div className="">
          <Link to="/dashboard/setting">
          <CtaButton text={"Edit"} icon={"FiEdit"} />
          </Link>
        </div>
      </div>
      {/* bio  */}
      <div className="flex bg-richblack-800 rounded-xl p-10 justify-between">
        <div className="flex flex-col gap-8 justify-between">
          <p className="text-lg font-semibold">About</p>
          <p className="text-richblack-200">Write something about you</p>
        </div>
        <div className="">
          <CtaButton onClick={()=>navigate("/dashboard/setting")} text={"Edit"} icon={"FiEdit"}/>
        </div>
      </div>

      {/* personal details  */}
      <div className=" bg-richblack-800 rounded-xl mb-12 flex flex-col gap-7 p-10 ">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Personal Details</p>
          <CtaButton onClick={()=>navigate("/dashboard/setting")} text={"Edit"} icon={"FiEdit"}/>
        </div>
        <div className="flex gap-[20%]">
          <div className="flex flex-col gap-5">
            <div className="">
              <p className="text-richblack-400">First Name</p>
              <p className="font-semibold ">{user.firstName}</p>
            </div>
            <div className="">
              <p className="text-richblack-400">Account Type</p>
              <p className="font-semibold ">{user.accountType}</p>
            </div>
            <div className="">
              <p className="text-richblack-400">Email</p>
              <p className="font-semibold ">{user.email}</p>
            </div>
            <div className="">
              <p className="text-richblack-400">Gender</p>
              <p className="font-semibold ">{user.additionalDetails.gender ? user.additionalDetails.gender : "Add gender"}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="">
              <p className="text-richblack-400">Last Name</p>
              <p className="font-semibold ">{user.lastName}</p>
            </div>
            <div className="">
              <p className="text-richblack-400">Phone Number</p>
              <p className="font-semibold ">{user.additionalDetails.contactNumber?
              user.additionalDetails.contactNumber : "Add Contact Number"}</p>
            </div>
            <div className="">
              <p className="text-richblack-400">Date of Birth</p>
              <p className="font-semibold ">{user.additionalDetails.dateOfBirth ? user.additionalDetails.dateOfBirth:"Add Date of birth"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myprofile