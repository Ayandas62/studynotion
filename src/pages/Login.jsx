import React from 'react'
import Template from '../component/core/Auth/Template'
import login_img  from '../assets/Images/login.webp'

const Login = () => {

  return (
    <Template
      image={login_img}
      formType = "login"
    />
  )
}

export default Login