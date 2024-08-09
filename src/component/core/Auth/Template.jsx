import React from 'react'
import frame from '../../../assets/Images/frame.png'
import Login from './Login'
import Signup from './Signup'

const Template = ({image,formType}) => {
  return (
    <div className="flex items-center justify-between w-10/12 mx-auto gap-4 min-h-screen text-white">
      <div className="flex flex-col w-[40%] gap-[36px]">
        <div className="flex flex-col">
          <p className="text-4xl text-richblack-5 mb-3">Welcome Back</p>
          <p className="text-richblack-100 text-lg">Discover your passion</p>
          <p className="font-bold font-edu-sa text-[#47A5C5]">Be Unstoppable</p>
        </div>
        
        {formType === "login" ? <Login/>:<Signup/>}
      </div>
      <div className="relative w-[45%]">
        <img src={frame} loading="lazy" className="-z-10" alt="login img" />
        <img src={image} className="absolute -top-4 right-4 " alt="" />
      </div>
    </div>
  )
}

export default Template