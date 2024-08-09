import React from 'react'
import HighlightText from '../component/core/Homepage/HighlightText'
import aboutus1 from "../assets/Images/aboutus1.webp";
import aboutus2 from "../assets/Images/aboutus2.webp";
import aboutus3 from "../assets/Images/aboutus3.webp";
import foundingStory from "../assets/Images/FoundingStory.png"
import Button from '../component/core/Homepage/Button';
import ContactUsForm from '../component/contactUs/ContactUsForm';
import Footer from "../component/common/Footer"

const About = () => {
  return (
    <div className="text-richblack-5 box-border">
      {/* section 1 */}
      <section className="bg-richblack-800" >
        <div className="w-11/12 m-auto flex flex-col h-[618px] gap-5 items-center relative">
          <header className="mt-[100px]">
            <h1 className="text-4xl text-center ">
            Driving Innovation in Online Education for a<br/> <HighlightText text={"Brighter Future"}/>
            </h1>
            <p className="text-center text-richblack-200 mt-4">Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a<br/> brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a<br/> vibrant learning community.</p>
          </header>
          <div className="flex gap-6 absolute bottom-[-100px]">
            <img src={aboutus1} alt="" />
            <img src={aboutus2} alt="" />
            <img src={aboutus3} alt="" />
          </div>
        </div>
      </section>
      {/* section2 */}
      <section className="mt-[100px]">
        <div className="w-11/12 m-auto">
          <div className="mt-9 text-4xl text-center">We are passionate about revolutionizing the way we learn. Our<br/> innovative platform <HighlightText text={"combines technology"}/>, <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">expertise</span>, and community to<br/> create an <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">unparalleled educational experience.</span></div>
        </div>
        <div className="border-b mt-[70px] border-richblack-700"></div>
      </section>
      {/* section3 */}
      <section className="mt-[100px]">
        <div className=" w-10/12 m-auto flex gap-[150px] flex-col">
          <div className="flex justify-around">
            <div className="w-[40%]">
              <div className="bg-gradient-to-b from-[#833AB4] to-[#FD1D1D] text-transparent bg-clip-text inline font-bold text-4xl">Our Founding Story</div>
              <p className="text-richblack-200 mt-5">Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.<br/>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
            </div>
              <img className="w-[40%]" src={foundingStory} alt="" />
          </div>
          <div className="flex justify-around">
            <div className="w-[40%]">
              <div className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold inline text-4xl">Our Founding Story</div>
              <p className="text-richblack-200 mt-5">With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
            </div>
              <div className="w-[40%]">
                <div className="text-4xl">
                  <HighlightText text={"Our Mission"}/>
                </div>
                <p className="text-richblack-200 mt-5">With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
              </div>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className="bg-richblack-800 mt-[50px]">
        <div className="w-11/12 m-auto justify-around py-[50px] flex">
          <div className="">
            <div className="text-4xl font-bold">5K</div>
            <p className="text-richblack-200">Active Students</p>
          </div>
          <div className="">
            <div className="text-4xl font-bold">10+</div>
            <p className="text-richblack-200">Mentors</p>
          </div>
          <div className="">
            <div className="text-4xl font-bold">200+</div>
            <p className="text-richblack-200">Courses</p>
          </div>
          <div className="">
            <div className="text-4xl font-bold">50+</div>
            <p className="text-richblack-200">Awards</p>
          </div>
        </div>
      </section>
      {/* section5 */}
      <section className="mt-[70px]">
        <div className="w-10/12 m-auto">
          <div className="flex justify-between">
            <div className="w-[45%] flex flex-col gap-6 items-start">
              <h2 className="text-4xl">World-Class Learning for<br/><HighlightText text={ "Anyone, Anywhere"}/></h2>
              <p className="text-richblack-200">Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.</p>
              <Button active={true} children={"Learn More"} linkto={"/login"}/>
            </div>
            <div className="flex w-[50%]">
              <div className="bg-richblack-700 w-full p-8 flex flex-col gap-8">
                <div className="text-lg">Curriculum Based on<br/> Industry Needs</div>
                <p className="text-richblack-200">Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.</p>
              </div>
              <div className="bg-richblack-800 w-full p-8 flex flex-col gap-8">
                <div className="text-lg">Our Learning Methods</div>
                <p className="text-richblack-200">The learning process uses the namely online and offline.</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[25%]"></div>
            <div className="bg-richblack-700 w-[25%] p-8 flex flex-col gap-8">
                <div className="text-lg">Certification</div>
                <p className="text-richblack-200">You will get a certificate that can be used as a certification during job hunting.</p>
              </div>
              <div className="bg-richblack-800 w-[25%] p-8 flex flex-col gap-8">
                <div className="text-lg">Ready to work</div>
                <p className="text-richblack-200">Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program.</p>
              </div>
              <div className="bg-richblack-700 w-[25%] p-8 flex flex-col gap-8">
                <div className="text-lg">Rating 
                "Auto-grading"</div>
                <p className="text-richblack-200">You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor.</p>
              </div>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section className="mt-[50px]">
        <div className="w-11/12 m-auto flex flex-col items-center">
          <div className="text-center">
            <div className=" text-4xl">Get in touch</div>
            <p className="text-richblack-200">We'd love to here for you, Please fill out this form.</p>
          </div>
          <ContactUsForm/>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default About