const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String
    },
    courseDescription:{
        type:String,
        trim:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    whatYouWillLearn:{
        type:String
    },
    courseContent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section"
    }],
    ratingAndReviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview"
    }],
    price:{
        type:String
    },
    thumbnail:{
        type:String
    },
    tag:{
        type:[String],
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    studentsEnrolled:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    instruction: {
      type:[String],  
    },
    status:{
        type:String,
        enum:["Draft","Published"]
    }
})

module.exports = mongoose.model("Course",courseSchema)