import React from 'react'
import { IoIosChatbubbles } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import ContactUsForm from '../component/contactUs/ContactUsForm';
import Footer from '../component/common/Footer';

const Contact = () => {
  return (
    <div className="text-richblack-5">
        <div className="w-10/12 m-auto flex gap-[40px] mb-10 mt-20">
            {/* contact details */}
            <div className="flex flex-col gap-6 bg-richblack-800 w-[35%] h-fit rounded-xl p-10">
                <div className="">
                    <div className="flex gap-2 text-lg font-bold items-center">
                        <IoIosChatbubbles/>Chat with us
                    </div>
                    <p className="text-richblack-200">Our friendly team is here to help.info@studynotion.com</p>
                </div>
                <div className="">
                    <div className="flex gap-2 text-lg font-bold items-center">
                        <BiWorld/>
                        Visit Us
                    </div>
                    <p className="text-richblack-200">OCome and say hello at our office HQ. Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
                </div>
                <div className="">
                    <div className="flex gap-2 text-lg font-bold items-center">
                        <FaPhone/>
                        Call Us
                    </div>
                    <p className="text-richblack-200">Mon - Fri From 8am to 5pm +123 456 7869</p>
                </div>
            </div>
            {/* contact form  */}
            <div className=" border w-[60%] border-richblack-500 rounded-xl p-12">
                <div className="mb-10">
                    <h2 className="text-4xl mb-3 font-semibold ">Got a Idea? We've got the skills. Let's team up</h2>
                    <p className="text-richblack-200">Tell us more about yourself and what you're got in mind.</p>
                </div>
                <ContactUsForm/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact