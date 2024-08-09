import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../../services/operation/authAPI';
import { useOnClickOutside } from 'usehooks-ts';
import {TbLayoutDashboardFilled, TbLogout } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";

const ProfileDropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state)=>state.profile)
  const clickHandler = ()=>{
    dispatch(logout(navigate))
  }
  const[open,setOpen] = useState(false)
  const ref = React.useRef(null)
    useOnClickOutside(ref,()=>setOpen(false))
 
  return (
    <div>
       
        <button ref={ref} className="relative" onClick={()=>setOpen(true)}>
          <div className=" z-10 flex gap-2 items-center">
            <img src={user?.image} 
            alt={user?.firstName}
            className="aspect-square w-[30px] rounded-full object-cover"
            />
            <FaAngleDown/>
          </div>
          {
            open === true &&
            <div className="bg-richblack-700 rounded-lg p-2 z-10 -right-[60%] top-[40px] absolute">
              <button onClick={()=>setOpen(false)}
              className="flex items-center py-2 px-4 rounded-lg transition-all duration-200 gap-2 hover:bg-richblack-500">
                <Link
                className="flex items-center gap-2" to="/dashboard/my-profile">
                  <TbLayoutDashboardFilled/>
                  Dashboard
                </Link>
              </button>
              <div onClick={()=>{
                setOpen(false)
                clickHandler()
              }}
              className="flex items-center py-2 px-4 rounded-lg transition-all duration-200 gap-2 hover:bg-richblack-500">
                  <TbLogout/>
                  Logout
              </div>
          </div>
          }
          
        </button>
        
        
        
        {/* <button onClick={clickHandler} className="border border-richblack-700 bg-richblack-800
         px-4 py-2 text-richblack-100 rounded-md">Logout</button> */}
    </div>
  )}


export default ProfileDropDown