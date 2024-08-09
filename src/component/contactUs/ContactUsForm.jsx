import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import {apiConnector} from "../../services/apiConnector"
import {endPoint} from "../../services/apis"
import toast from 'react-hot-toast';
import countryCode from "../../data/countrycode.json"
const ContactUsForm = () => {
  const [loading,setLoading] = useState(false);
  const{
    register,
    handleSubmit,reset,
    formState:{errors,isSubmitSuccess}
  } = useForm( )

  const submitContactForm = async(data)=>{
    console.log("Logging Data" , data);
    const toastId = toast.loading("Loading...")
    try{
      setLoading(true);
      
      const response = await apiConnector("POST",endPoint.CONTACTUS_API,data)
      console.log("Logging response->",response);
      setLoading(false);
      toast.success("successfully send your message")
    }catch(error){
      console.log("error->",error)
      setLoading(false)
    }
    toast.dismiss(toastId)
  }

  useEffect(()=>{
    if(isSubmitSuccess){
      reset({
        email:"",
        firstName:"",
        lastName:"",
        message:"",
        phoneNo:"",
      },[reset,isSubmitSuccess])
    }
  })
  return (
    <form onSubmit={handleSubmit(submitContactForm)} className="flex flex-col gap-6" action="">
    {/* name  */}
      <div className="flex gap-3">
        <div className="flex flex-col w-full">
          <label htmlFor="firstName">First Name</label>
          <input 
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter First Name"
          className="form-style"
          {...register("firstName",{required:true})}
          />
          {
            errors.firstName &&(
              <span className="-mt-1 text-[12px] text-yellow-100">Please enter your name</span>
            )
          }
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="lastName">Last Name</label>
          <input 
          type="text"
          name="lastName"
          className="form-style"
          id="lastName"
          placeholder="Enter Last Name"
          {...register("lastName")}
          />
        </div>
      </div>
      {/* email  */}
      <div className="flex flex-col">
        <label htmlFor="email">Email*</label>
        <input 
        type="email"
        name="email" 
        id="email"
        className="form-style"
        placeholder="Enter Your Email" 
        {...register("email",{required:true})}
        />
        {
          errors.email &&(
            <span className="-mt-1 text-[12px] text-yellow-100">Please enter email here</span>
          )
        }
      </div>
      {/* number */}
      <div className="">
        <label htmlFor="">Number</label>
        <div className="flex gap-5">
          <div className="">
            <select 
            className="form-style w-[81px]" 
            name="dropdown" id="dropdown"
            {...register("countrycode",{required:true})}
            >
              {
                countryCode.map((element,index)=>{
                  return(
                    <option key={index} value={element.code}>{element.code} - {element.country}</option>
                  )
                })
              }
            </select>
          </div>
          <div className=" w-[calc(100%-90px)]">
            <input type="number" 
            name="phoneNo" 
            id="phoneNo"
            className="w-full text-richblack-900 form-style"
            placeholder="1234567890"
            {...register("phoneNo",{
              required:{value:true,message:"Please enter phone number"},
              maxLength:{value:10,message:"invalid phone number"},
              minLength:{value:8,message:"invalid phone number"}
            })}
            />
          </div>
        </div>
        {
          errors.phoneNo && (
            <span className="-mt-1 text-[12px] text-yellow-100">{errors.phoneNo.message}</span>
          )
        }
      </div>
      {/* message  */}
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea 
        type="text"
        name="message" 
        id="message"
        cols="30"
        rows="7"
        className="form-style"
        placeholder="Type your message here"
        {...register("message",{required:true})}
        />
        {
          errors.message &&(
            <span className="-mt-1 text-[12px] text-yellow-100">Please Enter your message</span>
          )
        }
      </div>
      <button type="submit" className="bg-yellow-50 rounded-lg py-[10px] text-lg
         text-richblue-900 w-full transition-all duration-200 hover:scale-95">Send Message</button>
    </form>
  )
}

export default ContactUsForm