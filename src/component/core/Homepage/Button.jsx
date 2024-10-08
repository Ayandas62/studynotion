import React from 'react'
import { Link } from 'react-router-dom'

function Button({children,active,linkto}) {
  return (
    <Link to={linkto}>
        <div className={`text-center px-6 py-3 text-[13px] rounded-md font-bold
            ${active?"bg-yellow-50 text-black":"bg-richblack-800"}
             hover:scale-95 transition-all duration-200 text-sm
            `}>
            {children}
        </div>
    </Link>
  )
}

export default Button