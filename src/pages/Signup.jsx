import React from 'react'
import Template from '../component/core/Auth/Template'
import i from "../assets/Images/signup.webp"

const Signup = () => {
  return (
    <Template
      image={i}
      formType={"signup"}
    />
  )
}

export default Signup