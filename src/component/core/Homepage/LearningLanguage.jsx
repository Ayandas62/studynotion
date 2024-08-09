import React from 'react'
import HighlightText from './HighlightText'
import knowProgress from '../../../assets/Images/Know_your_progress.svg';
import compare from '../../../assets/Images/Compare_with_others.svg';
import planLesson from '../../../assets/Images/Plan_your_lessons.svg';
import Button from './Button';


const LearningLanguage = () => {
  return (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col  gap-5">
          <div className="font-semibold text-4xl text-center">
            Your Swiss knife for  
            <HighlightText text={' learning any language'}/> 
          </div>
          <p className="text-richblack-600 text-center">Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, <br /> progress tracking, custom schedule and more.</p>
        </div>
        <div className="flex items-center justify-center">
          <img src={knowProgress} className="object-contain -mr-32 " alt="Know your progress" />
          <img src={compare} className="object-contain " alt="Know your progress"/>
          <img src={planLesson} className="object-contain -ml-32 " alt="Know your progress" />
        </div>
        <div className=" mx-auto">
          <Button active={true} children={"learn More"} linkto={"/signup"}/>
        </div>
    </div>
  )
}

export default LearningLanguage