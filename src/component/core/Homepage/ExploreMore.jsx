import React, { useState } from 'react'
import { HomePageExplore } from "../../../data/homepage-explore"
import HighlightText from "./HighlightText"
import CourseCard from './CourseCard'

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]

const ExploreMore = () => {
    const [currentTab,setCurrentTab] = useState(tabsName[0])
    const [courses,setCourses] = useState(HomePageExplore[0].courses)
    const [currentCard,setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

    const setMyCard = (values)=>{
      setCurrentTab(values);
      const result = HomePageExplore.filter((course)=>course.tag===values)
      setCourses(result[0].courses)
      setCurrentCard(result[0].courses[0].heading)
    }


  return ( 
    <div className=" relative">
    <div className='flex flex-col items-center'>
      <div className="text-4xl font-semibold">
        Unlock the <HighlightText text={"Power of Code"}/>
      </div>
      <p className=' text-richblack-300 text-center mt-2'>
        Learn to build Anything tou can imagine
      </p>
      <div className="flex gap-2 bg-richblack-800  px-1 py-1 rounded-3xl mb-[200px]">
        {
          tabsName.map((element,index)=>{
            return(
              <div className={`flex rounded-3xl p-2 items-center gap-2 
              ${element ===currentTab? "bg-richblack-900 text-richblack-5" :
              "text-richblack-200 transition-all duration-200 hover:bg-richblack-900 cursor-pointer hover:text-richblack-5"}`} key={index} 
              onClick={()=>setMyCard(element)}>
                {element}
              </div>
            )
          })
        }
      </div>
      
    </div>
    <div className="flex absolute -bottom-[110px] -left-[50%] justify-between gap-[36px]">
        {
          courses.map((element,index)=>{
            return(
              <CourseCard
                key={index} cardData={element} 
                currentCard={currentCard} setCurrentCard={setCurrentCard}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ExploreMore