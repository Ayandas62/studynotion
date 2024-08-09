import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { getEnrolledCourses } from '../../../services/operation/profileAPI'
import ProgressBar from '@ramonak/react-progress-bar'

const EnrolledCourse = () => {
    const {token} = useSelector((state)=>state.auth)
    
    const[enrolledCourse,setEnrolledCourse] = useState(null)

    const getEnrolledCourse = async()=>{
        try{
            const response = await getEnrolledCourses(token);
            setEnrolledCourse(response);
        }catch(err){
            console.log("Unable tp fetch enrolled course",err);
        }
    }

    useEffect(()=>{
        getEnrolledCourse()
    },[])
  return (
    <div className="text-richblack-5">
        <h2 className="text-3xl">Enrolled Course</h2>
        {
            !enrolledCourse?(<div>
                Loading
            </div>):
            !enrolledCourse.length?(<p>You have not enrolled in any course yet</p>):
            (
                <div>
                    <div className="">
                        <p>Course Name</p>
                        <p>Duration</p>
                        <p>Progress</p>
                    </div>
                    {
                        enrolledCourse.map((course,index)=>(
                            <div className="">
                                <div className="">
                                    <img src={course.thumbnail} alt="" />
                                    <div className="">
                                        <p>{course.title}</p>
                                        <p>{course.courseDescription}</p>
                                    </div>
                                </div>
                                <div className="">
                                    {course?.totalDuration}
                                </div>
                                <div className="">
                                    <p>Progress: {course.progrerssPrecentage || 0}%</p>
                                    <ProgressBar
                                    completed = {course.progrerssPrecentage || 0}
                                    height='8px'
                                    isLabelVisible={false}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
        }
    </div>
  )
}

export default EnrolledCourse