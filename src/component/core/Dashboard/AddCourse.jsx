import React from 'react'
import RenderSteps from './AddCourse/RenderSteps'

const AddCourse = () => {
  return (
    <div className="text-richblack-5 w-10/12 mx-auto flex gap-5">
        <div className="w-[55%]">
            <h1 className="text-3xl">Upload Course</h1>
            <div className="">
                <RenderSteps/>
            </div>
        </div>
        <div className="bg-richblack-800 w-[40%] p-8 rounded-lg">
            <p>Code Upload Tips</p>
            <ul>
                <li>Set the Course Price option or make it free.</li>
                <li>Standard size for the course thumbnail is 1024x576.</li>
                <li>Video section controls the course overview video.</li>
                <li>Course Builder is where you create & organize a course.</li>
                <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
                <li>Information from the Additional Data section shows up on the course single page.</li>
                <li>Make Announcements to notify any important</li>
                <li>Notes to all enrolled students at once.</li>
            </ul>
        </div>
    </div>
  )
}

export default AddCourse