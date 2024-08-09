import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import CourseInformationForm from './CourseInformationForm'

const RenderSteps = () => {
    const {step} = useSelector((state)=>state.course)
    const steps = [
        {
            id:1,
            title:"Course Information",
        },
        {
            id:2,
            title:"Course Builder",
        },
        {
            id:3,
            title:"Publish",
        },
    ]
  return (
    <div>
        <div className="flex">
            {
                steps.map((items,index)=>(
                    <div className="">
                    <div className="flex items-center">
                        <div
                        key={index}
                        className={`${step === items.id ?
                        "bg-yellow-900 border border-yellow-50 text-yellow-50":
                        "border-richblack-700 bg-richblack-800 text-richblack-300"} 
                        ${step>items.id && "bg-yellow-50"}
                        h-12 w-12 flex items-center justify-center rounded-full`}>
                            {step>items.id ? 
                            <FaCheck className="text-richblack-900 text-xl font-bold"/>:
                            items.id}
                        </div>
                        <div className="w-20 h-0 border border-dashed border-yellow-500"></div>

                    </div>
                    <div className="flex items-center">
                        <div className="">{items.title}</div>
                    </div>
                    </div>
                ))

            }
        </div>
        {step === 1 && <CourseInformationForm/>}
    </div>
  )
}

export default RenderSteps