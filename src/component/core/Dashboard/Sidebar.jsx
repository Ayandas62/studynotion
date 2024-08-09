import React,{useState} from 'react'
import {sidebarLinks} from "../../../data/dashboard-links"
import {logout} from "../../../services/operation/authAPI"
import { useDispatch, useSelector } from 'react-redux'
import SidebarLinks from './SidebarLinks'
import { useNavigate } from 'react-router-dom'
import { VscSignOut } from 'react-icons/vsc'
import ConfirmationModal from '../../common/ConfirmationModal'

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const [confirmationModal,setConfirmationModal] =  useState(null);
  // console.log(confirmationModal)
  const {user,loading:profileLoading} = useSelector((state)=>state.profile)
  const {loading:authLoading} = useSelector((state)=>state.auth)

  if(profileLoading || authLoading){
    return (
      <div className="">
        Loading...
      </div>
    )
  }

  return (
    <div className="text-richblack-5">
      <div className=" flex gap-2 flex-col min-w-[222px] border-r border-r-richblack-700 
      h-[calc(100vh-3.5rem)] ">
        <div className="flex gap-1 flex-col">
          {
            sidebarLinks.map((link,index)=>{
              if(link.type&& link.type !== user.accountType) return null
              return (
                  <SidebarLinks link={link} iconName={link.icon} key={link.id} />
              )
            })
          } 
        </div>
        <div className="mx-auto h-[1px] w-10/12 bg-richblack-600"></div>
          <div className="flex flex-col">
            <SidebarLinks link={{name:"Setting",path:"/dashboard/setting"}}
            iconName="VscSettingsGear"
            />
            <button 
            onClick={()=>setConfirmationModal({
              text1:"Are you sure ?",
              text2:"You will be logged out of your account",
              btnText1:"Log Out",
              btnText2:"Cancel",
              btnHandler1:()=>dispatch(logout(navigate)),
              btnHandler2:()=>setConfirmationModal(null)
            })}
            className="text-richblack-200"
            >
              <div className="flex items-center p-4 gap-2">
                <VscSignOut/>
                <span>Logout</span>
              </div>
            </button>
          </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
    </div>
  )
}

export default Sidebar