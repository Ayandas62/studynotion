import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { showAllCategory } from '../../../../services/operation/courseDetailsAPI';
import RequirementFeilds from './RequirementFeilds';
import { setStep } from '../../../../slices/courseSlice';
import CtaButton from '../../../common/CtaButton'

const CourseInformationForm = () => {

    const dispatch = useDispatch()
    const{course,editCourse} = useSelector((state)=>state.course);
    const [courseCategory,setCourseCategory] = useState([])
    const [loading,setLoading] = useState(false);
    const{
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{errors}
    } = useForm();

    useEffect(() => {
      const getCategory = async()=>{
        setLoading(true)
        const category = await showAllCategory()
        console.log(category)
        if(category.length>0){
          setCourseCategory(category)
        }
        setLoading(false)
      }

      if(editCourse){
        setValue("courseTitle",course.courseName)
        setValue("courseShortDesc",course.courseDescription)
        setValue("coursePrice",course.price)
        setValue("courseBenifit",course.whatYouWillLearn)
        setValue("courseCategory",course.category)
        setValue("courseRequirements",course.instruction)
        setValue("courseImage",course.thumbnail)
      }

      getCategory()
    }, [])
    
    const onSubmit = async(data)=>{
      const formData = new FormData()
      formData.append("courseName",data.courseTitle)
      formData.append("courseDescription",data.courseShortDesc)
      formData.append("price",data.coursePrice)
      formData.append("whatYouWillLearn",data.courseBenifit)
      formData.append("category",data.courseCategory)
      formData.append("instruction",data.courseRequirements)
      formData.append("thumbnail",data.courseImage)
      formData.append("courseName",data.courseTitle)
      setLoading(true);
      
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className="rounded-lg border border-richblack-700 bg-richblack-800 p-6 space-y-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="">Course Title <sup>*</sup></label>
        <input 
        type="text" 
        name="courseTitle" 
        id="courseTitle"
        placeholder="Enter Course Name"
        {
          ...register("courseTitle",{required:true})
        }
        className="form-style"
        /> 
        {
          errors.courseTitle &&(
            <span className="text-yellow-300">Please enter course title</span>
          )
        } 
      </div> 
      <div className="flex flex-col gap-2">
        <label htmlFor="courseShortDesc">
          Course Short Description <sup>*</sup>
        </label>
        <textarea 
        name="courseShortDesc" 
        id="courseShortDesc"
        placeholder="Enter description"
        {...register("courseShortDesc",{required:true})}
        className="form-style"
        />
        {
          errors.courseShortDesc&&(
            <span className="text-yellow-300">Please enter course description</span>
          )
        }
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="coursePrice">
          Price <sup>*</sup>
        </label>
        <input 
        name="coursePrice" 
        id="coursePrice"
        placeholder="Enter Course Price"
        {...register("coursePrice",{required:true})}
        className="form-style"
        />
        {
          errors.coursePrice&&(
            <span className="text-yellow-300">Please enter course Price</span>
          )
        }
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="courseCategory">Course Category <sup>*</sup></label>
        <select 
        name="courseCategory" 
        id="courseCategory"
        {
          ...register("courseCategory",{required:true})
        }
        className="form-style"
        >
          <option value="" disabled>Chose a Category</option>
          {
            !loading&&courseCategory.map((category,index)=>(
              <option key={index} value={category?._id}>{category?.name}</option>
            ))
          }
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="courseBenifit">Benifits of this course</label>
        <textarea 
        name="courseBenifit" 
        id="courseBenifit"
        className="form-style"
        placeholder="Enter benifits of this course"
        {...register("courseBenifit",{required:true})}
        />
      </div>
        <RequirementFeilds
        name="courseRequirements"
        label="Course Requirements"
        errors={errors}
        setValue={setValue}
        getValues={getValues}
        register={register}
        />
      <div className="">
        {
          editCourse &&(
            <button
            onClick={()=>dispatch(setStep(2))}
            >
              Continue Without Saving
            </button>
          )
        }
        <CtaButton
        text={!editCourse ? "Next" :"Save Changes"}
        />
      </div>
    </form>
  )
}

export default CourseInformationForm