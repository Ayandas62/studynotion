import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import CTAButton from "../component/core/Homepage/Button"
import HighlightText from '../component/core/Homepage/HighlightText';
import bannerVideo from "../assets/Images/banner.mp4"
import CodeBlocks from '../component/core/Homepage/CodeBlocks';
import TimeLineSection from '../component/core/Homepage/TimeLineSection';
import LearningLanguage from '../component/core/Homepage/LearningLanguage';
import InstructorSection from '../component/core/Homepage/InstructorSection';
import ReviewSection from '../component/core/Homepage/ReviewSection';
import ExploreMore from '../component/core/Homepage/ExploreMore';
import Footer from '../component/common/Footer';



const Home = () => {
  return (
    <div className="w-[100%]">
        {/* section 1 */}
        <div className="mx-auto flex flex-col w-11/12 items-center max-w-maxContent text-white justify-between">
            
            <div className="flex flex-col items-center bg-richblack-900">
                <Link to={"/signup"}>
                    <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
                        <div className="flex items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900">
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className="text-center text-4xl font-semibold mt-7">
                    Empower Your Future with  
                    <HighlightText text={" Coding Skills"}/>
                </div>
                <div className="font-semibold text-richblack-300 text-center w-[90%] mt-4 ">
                    <p className="text-center">
                    Become an InstructorEmpower Your Future with Coding Skills
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                    </p>
                </div>
                
                <div className="flex flex-row mt-8 gap-4">
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"} children={"Book a demo"}/>
                </div>
                <div className=" bannerBox mx-3 my-12 w-[1035px]">
                    <video className="bannerVideo" loop muted autoPlay>
                        <source src={bannerVideo} />
                    </video>
                </div>
                {/* code blocks  */}
                <div className="">
                    <CodeBlocks 
                        position={"lg:flex-row"}
                        backGroundGradient={"codeBoxAnimationYellow"}
                        heading={<div className="text-4xl">
                            Unlock your <HighlightText text={"coding potential"}/> with our online courses.
                        </div>}
                        subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                        ctabtn1={
                            {
                                btnText:"Try it Yourself",
                                linkto:"/signup",
                                active:true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText:"Learn More",
                                linkto:"/login",
                                active:false,
                            }
                        }
                        codeBlock={`1 <!DOCTYPE html>\n<html>\n<head><title>Example\n</title><linkrel="stylesheet"href="styles.css">\n</head><body>\nh1><ahref="/">Header</a></h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n</nav>
                                    `}
                                    codeColor={"yellow"}
                    />
                    
                </div>

                <div className="">
                    <CodeBlocks 
                        position={"lg:flex-row-reverse"}
                        backGroundGradient={"codeBoxAnimation"}
                        heading={<div className="text-4xl">
                            Start <HighlightText text={"coding in seconds"}/>
                        </div>}
                        subHeading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                        ctabtn1={
                            {
                                btnText:"Continue Lesson",
                                linkto:"/signup",
                                active:true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText:"Learn More",
                                linkto:"/login",
                                active:false,
                            }
                        }
                        codeBlock={`<!DOCTYPE html>\n<html>\n<head><title>Example\n</title><linkrel="stylesheet"href="styles.css">\n</head>\nbody>\nh1><ahref="/">Header</a></h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>
                                    `}
                        codeColor={"yellow"}
                        
                    />
                    
                </div>
                <ExploreMore/>
            </div>
        </div>
            {/* section 2 */}

        <div className="bg-pure-greys-5 text-richblack-700">
                {/* background image section */}
                <div className="homepage-bg h-[310px]">
                    <div className="w-11/12 max-w-maxContent flex justify-center items-center gap-5 mx-auto">
                        <div className="flex gap-7 mt-36 text-white">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-2">
                                    Explore Full Catalog<FaArrowRight/>
                                </div>
                            </CTAButton>
                            <CTAButton active={false} children={"Learn More"} linkto={"/signup"}/>
                        </div>
                    </div>
                </div>

                <div className="w-11/12 mx-auto flex flex-col max-w-maxContent">
                {/* header */}
                    <div className="flex mt-20">
                        <div className="text-4xl w-[50%]">
                            Get the skills you need for a 
                            <HighlightText text={"job that is in demand."}/>
                        </div>
                        <div className="w-[50%] flex flex-col items-start gap-7">
                        The modern StudyNotion is the dictates its own terms. Today,
                        to be a competitive specialist requires more than professional 
                        skills.
                        <CTAButton children={"Learn More"} active={true} linkto={"/signup"}/>
                        </div>
                    </div>

                    <TimeLineSection/>
                    <LearningLanguage/>
                </div>
        </div>

        {/* section 3 */}

        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col gap-8 text-white items-center bg-richblack-900">
            {/* become an instructor  */}
            <InstructorSection/>
            {/* review section  */}
            <ReviewSection/>
        </div>
       <div className="">
            <Footer/>
       </div>
    </div>
  )
}

export default Home