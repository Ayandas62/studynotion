import React from 'react'
import becomeInstructor from '../../../assets/Images/Instructor.png' 
import HighlightText from './HighlightText'
import Button from './Button'

const InstructorSection = () => {
  return (
    <div className="flex items-center justify-between mt-20 gap-[98px]">
        <div className="instructor shadow-white">
            <img src={becomeInstructor} className=" object-contain" alt="Instructor" />
        </div>
        
        <div className="flex flex-col items-start gap-6 w-[40%] ">
            <h2 className="text-4xl">Become An <br/><HighlightText text={"Instructor"}/></h2>
            <p className="text-richblack-200 w-[90%]">Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
            <Button children={"Start Teaching Today"} active={true} linkto={"/signup"} />
        </div>
    </div>
  )
}

export default InstructorSection