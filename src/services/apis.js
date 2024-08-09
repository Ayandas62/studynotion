const BASE_URL = "http://localhost:4000/api/v1"
export const categories = {
    CATEGORIES_API:BASE_URL +"/course/showAllCategory"
}

export const endPoint = {
    RESETPASSWORD_API: BASE_URL + "/reset-password",
    RESETPASSTOKEN_API: BASE_URL + "/reset-password-token",
    LOGIN_API: BASE_URL + "/login",
    SENDOTP_API: BASE_URL + "/sendotp",
    SIGNUP_API:BASE_URL + "/signup",
    CONTACTUS_API:BASE_URL +"/contact"
}

export const profileEndPoint = {
    UPDATE_PROFILE_API:BASE_URL+"/updateProfile",
    CHANGE_PASSWORD_API:BASE_URL+"/changePassword",
    DELETE_ACCOUNT_API:BASE_URL+"/deleteProfile",
    GET_ENROLLED_COURSE:BASE_URL+"/getEnrolledCourse",
}

export const courseEndpoints = {
    GET_ALL_COURSE_API: BASE_URL + "/course/getAllCourses",
    COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
    EDIT_COURSE_API: BASE_URL + "/course/editCourse",
    COURSE_CATEGORIES_API: BASE_URL + "/showAllCategories",
    CREATE_COURSE_API: BASE_URL + "/course/createCourse",
    CREATE_SECTION_API: BASE_URL + "/course/addSection",
    CREATE_SUBSECTION_API: BASE_URL + "/course/addSubSection",
    UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
    UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",
    GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",
    DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
    DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",
    DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
    GET_FULL_COURSE_DETAILS_AUTHENTICATED:
      BASE_URL + "/course/getFullCourseDetails",
    LECTURE_COMPLETION_API: BASE_URL + "/course/updateCourseProgress",
    CREATE_RATING_API: BASE_URL + "/course/createRating",
  }