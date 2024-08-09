const Course = require("../models/course");
const Category = require("../models/cetegory");
const user = require("../models/user");
const User =require("../models/user");
const {uploadImageToCloudinary} = require("../utils/imageUploader");

exports.createCourse = async(req,res)=>{
    try{
        const {courseName,courseDescription,whatYouWillLearn,price,category} = req.body
        const thumbnail = req.files.thumbnailImage;

        if(!courseName || !whatYouWillLearn || !price ||!thumbnail || !category){
            res.json({
                success:false,
                message:"All fields are require"
            })
        }
        const userId = req.user.id;
        const userDetails = await User.findById(userId,{accountType:"Instructor"})
        console.log(userDetails);
        if(!userDetails){
            res.json({
                message:"Instructor details not found"
            })
        }

        const tagDetails = await Category.findById(category)
        if(!tagDetails){
            res.json({
                success:true,
                message:"Category details not found"
            })
        }

        const thumbnailImage = await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME)

        const newCourse = await Course.create({
            courseName,
            courseDescription,
            instructor:userId,
            whatYouWillLearn,
            price,
            thumbnail:thumbnailImage.secure_url,
            category
        })

        await User.findByIdAndUpdate({_id:userDetails._id},{$push:{courses:newCourse._id}},
            {new:true})

            await Category.findByIdAndUpdate({_id:category},
                {$push:{course:newCourse._id}},{new:true})

                res.status(200).json({
                    success:true,
                    message:"Successfully upload course",
                    data:newCourse
                })

    }catch(error){
        console.log("Error While create course",error)
        res.status(500).json({
            success:false,
            message:"Error While create course"
        })
    }
}


exports.getAllCourse = async(req,res)=>{
    try{
        const allCourses = await Course.find({},{courseName:true,
            courseContent:true,price:true,tag:true,ratingAndReviews:true,
            studentsEnrolled:true
        }).populate("instructor").exec()
        res.status(200).json({
            success:true,
            message:"All course are fetched successfully",
            data:allCourses
        })
    }catch(error){
        console.log("Error While fetch all course")
        res.status(500).json({
            success:false,
            message:"Error While fetch all course"
        })
    } 
}

exports.getCourseDetails = async(req,res)=>{
    try{
        const {courseId}= req.body;

        const courseDetails = await Course.find(
            {_id:courseId}
        ).populate({
            path:"instructor",
            populate:{
                path:"additionalDetails"
            },
        })
        .populate({
             path:"courseContent",
            populate:{
                path:"subSection"
            }}
        )
        .populate("ratingAndReviews")
        .populate("category")
        .exec()

        if(!courseDetails){
            return res.json({
                success:false,
                message:`Course not found the course with ${courseId}`
            })
        }else{
           return res.status(200).json({
                success:true,
                message:"course data fetched successfully",
                data:courseDetails,
            })
        }
    }catch(error){
        console.log(error);
        req.status(500).json({
            success:false,
            message:"error while fetched course details"
        })
    }
}