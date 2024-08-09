import React from 'react'
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timeLineImage from "../../../assets/Images/TimelineImage.png"

const timeLine = [
    {
        logo : logo1,
        heading:"Leadership",
        description:"Fully comited to the successfull company",
        border: "h-[42px] border-l border-dashed ml-6 border-[#AFB2BF]"
    },
    {
        logo : logo2,
        heading:"Leadership",
        description:"Fully comited to the successfull company",
        border:"h-[42px] border-l border-dashed ml-6 border-[#AFB2BF]"
    },
    {
        logo : logo3,
        heading:"Leadership",
        description:"Fully comited to the successfull company",
        border:"h-[42px] border-l border-dashed ml-6 border-[#AFB2BF]"
    },
    {
        logo : logo4,
        heading:"Leadership",
        description:"Fully comited to the successfull company"
    },
]

const TimeLineSection = () => {
  return (
    <div>
        <div className="flex justify-between mt-[50px] mb-[100px] items-center gap-[72px]">
            <div className="flex flex-col">
                {
                    timeLine.map((element,index)=>{
                        return(
                            <div className="" key={index}>
                                <div className="flex gap-6" key={index}>
                                    <div className="h-[50px] w-[50px] bg-white flex items-center justify-center rounded-full ">
                                        <img src={element.logo} alt="logo" />
                                    </div>
                                    <div className="">
                                        <h2 className='font-semibold'>{element.heading}</h2>
                                        <p>{element.description}</p>
                                    </div>
                                </div>
                                <div className={element.border}></div>
                            </div>
                        )
                    })
                } 
            </div>
            <div className="relative shadow-blue-200">
                <img src={timeLineImage} alt="time line" className="h-fit object-cover" />
                <div className=" absolute flex items-center justify-evenly bottom-[-64px] gap-[52px] text-white left-[101px] bg-[#014A32] w-[511px] h-[128px]">
                    <div className="flex items-center">
                        <p className="text-[36px] font-semibold">10</p>
                        <p>YEARS <br /> EXPERIENCE</p>
                    </div>
                    <div className="h-[44px] border border-[#037957]"></div>
                    <div className="flex items-center">
                        <p className="text-[36px] font-semibold">250</p>
                        <p>TYPES OF <br /> COURSES</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimeLineSection