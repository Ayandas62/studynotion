import React from 'react'
import * as Icons from "react-icons/fi"

const CtaButton = ({text,icon,onClick,type}) => {
    const Icon = Icons[icon]
  return (
    <button 
    onClick={onClick} 
    type={type}
    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#FFD60A] transition-all duration-200 font-semibold 
    text-richblack-900 hover:bg-richblack-900 hover:text-yellow-100">
        {text}
        {icon && <Icon/>}
    </button>
  )
}

export default CtaButton