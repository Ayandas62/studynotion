const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"course"
    },
    completedVideos:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubSection"
    },
})

module.exports = mongoose.model("CourseProgress",courseSchema)