import React from 'react'
import begineer from "../../../assets/TimeLineLogo/Union.svg"
import chart_tree from "../../../assets/TimeLineLogo//fi-sr-chart-tree.svg"

const CourseCard = ({cardData}) => {
  return (
    <div className={`bg-richblack-800 flex flex-col justify-between gap-9 w-[341px] ${cardData.classname}`}>
        <div className=" p-6">
          <div className=" text-[20px]">
            {cardData.heading}
          </div>
          <p className='text-richblack-300'>{cardData.description}</p>
        </div>
        <div className="">
          <div className=" border border-dashed border-richblack-300"></div>
          <div className="flex justify-between p-6">
            <div className="flex gap-2 items-center text-richblack-300">
              <img src={begineer} alt="" className='h-5'/>
              {cardData.level}
            </div>
            <div className="flex gap-2 items-center text-richblack-300">
              <img src={chart_tree} alt="" className='h-5'/>
              {cardData.lessionNumber}
              
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default CourseCard