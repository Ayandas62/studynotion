const RatingAndReview = require("../models/ratingAndReview");
const Course = require("../models/course");
const { default: mongoose } = require("mongoose");

exports.createRatingAndReview = async(req,res)=>{
    try{
        const userId = req.user.id;
        const{rating,review,courseId} = req.body
        const courseDetails = await Course.findOne({
            _id:courseId,studentsEnrolled:userId
        })
        if(!courseDetails){
            res.json({
                success:true,
                message:"You are not enrolled on this course"
            })
        }

        const alreadyReviewed = await RatingAndReview.findOne({
            user:userId,course:courseId
        })
        if(alreadyReviewed){
            res.json({
                success:false,
                message:"You have allready rate this course"
            })
        }

        const ratingReview = await RatingAndReview.create({
            user:userId,rating,review,course:courseId
        })

        const updatecourse = await Course.findByIdAndUpdate(
            {_id:courseId},
            {$push:{ratingAndReviews:ratingReview._id}},
            {new:true}
        )

        res.status(200).json({
            success:true,
            message:"Rating and review successfully update",
            data :ratingReview
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Rating and review failed to update",
        })
    }
}

exports.getAvarageRating = async(req,res)=>{
    try{
        const {courseId} = req.body;

        const result = await RatingAndReview.aggregate([
            {
                $match:{
                    course:new mongoose.Schema.Types.ObjectId(courseId)
                }
            },{
                $group:{
                    _id:null,
                    avarageRating:{$avg:"$rating"}
                }
            }
        ])

        if(result.length>0){
           return res.status(200).json({
                success:true,
                avarageRating:result[0].avarageRating,
            })
        }else{
           return res.status(200).json({
                success:true,
                
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Rating and review failed to update",
        })
    }
}


exports.getAllReview = async(req,res)=>{
    try{
        const allReview = await RatingAndReview.find({})
                                                .sort({rating:"desc"})
                                                .populate({
                                                    path:"user",
                                                    select:"firstName lastName email image"
                                                })
                                                .populate({
                                                    path:"course",
                                                    select:"courseName"
                                                })
                                                .exec();

        return res.status(200).json({
            success:true,
            message:"all reviews fetched successfully",
            data:allReview,
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}