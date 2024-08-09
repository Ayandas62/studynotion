const express = require("express");
const router = express.Router()

const {signup,login, sendOTP,changePassword} = require("../controller/Auth")
const {createCategory,categoryPageDetails,showAllCategory} = require("../controller/Category")
const {createCourse,getAllCourse,getCourseDetails} = require("../controller/Course")
const {capturePayment,verifySignature} = require("../controller/Payment");
const {profile,deleteAccount,getEnrolledCourses} = require("../controller/Profile")
const {createRatingAndReview,getAllReview,getAvarageRating} = require("../controller/RaringAndReview")
const {resetPassword,resetPasswordToken} = require("../controller/ResetPassword")
const {createSection,deleteSection,updateSection} = require("../controller/Section")
const {createSubSection,updateSubSection,deleteSubSection} = require("../controller/subSection");
const { auth, isAdmin, isStudent, isInstructor } = require("../middleware/auth");
const {contactUs} = require("../controller/ContactUs")

router.post("/signup",signup);
router.post("/login",login);
router.post("/createcategory",auth,isAdmin,createCategory);
router.post("/sendotp",sendOTP)
router.put("/updateProfile",auth,profile)
router.delete("/deleteProfile",auth,isStudent,deleteAccount)

router.post("/changePassword",auth,changePassword)

router.post("/reset-password-token",resetPasswordToken);
router.post("/reset-password",resetPassword);

router.post("/createCourse",auth,isInstructor,createCourse);

router.get("/getEnrolledCourse",auth,getEnrolledCourses)

//section
router.post("/addSection",auth,isInstructor,createSection);
router.post("/updateSection",auth,isInstructor,updateSection);
router.post("/deleteSection",auth,isInstructor,deleteSection);
router.post("/addSubSection",auth,isInstructor,createSubSection);

router.post("/getCourseDetails",getCourseDetails)

//contact us
router.post("/contact",contactUs);


// category

router.get("/showAllCategories",showAllCategory)

module.exports = router


