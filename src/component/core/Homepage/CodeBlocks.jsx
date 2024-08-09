import React from 'react'
import CTAButton from "./Button";
// import HighlightText from './HighlightText';
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({position,heading,subHeading,ctabtn1,ctabtn2,codeBlock,codeColor,backGroundGradient}) => {
  return (
    <div className={`flex mx-auto ${position} my-20 justify-between gap-10`}>
{/* section1 */}
        <div className="flex flex-col gap-8 w-[50%]">
            <div className="text-4xl">
                {heading}
            </div>
            
            <div className="text-richblack-300 font-semibold">
                {subHeading}
            </div>
            <div className="flex flex-row gap-11 mt-7">
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto} >
                    <div className="flex gap-2 items-center">
                        {ctabtn1.btnText}
                        <FaArrowRight/>
                    </div>
                </CTAButton>
                
                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto} >
                    {ctabtn2.btnText}
                </CTAButton>
                
            </div>
        </div>
{/* section2 */}
        <div className=" w-[45%] p-8 relative">
            <div className={`codeBoxAnimation flex absolute w-[362px] h-[257px] left-1 top-[5px] ${backGroundGradient}`}></div>
            
            <div className={`codeBox w-[470px] text-md flex p-2 font-mono bg-transparent`}>
            <div className="flex flex-col text-center w-[10%]">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
            </div>
            <div className={`${codeColor} w-[90%] text-yellow-50 font-mono font-bold`}>
                <TypeAnimation 
                    sequence={[codeBlock,0,""]}
                    repeat={Infinity}
                    speed={150}
                    omitDeletionAnimation={true}
                    style={
                        {
                            whiteSpace:"pre-line",
                            display:"block"
                        }
                    }
                />
            </div>
                
            </div>
        </div>
    </div>
  )
}

export default CodeBlocks