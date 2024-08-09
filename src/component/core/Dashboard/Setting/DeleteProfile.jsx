import React,{useState} from 'react'
import {  FiTrash2 } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteAccount } from '../../../../services/operation/profileAPI'
import ConfirmationModal from '../../../common/ConfirmationModal'

const DeleteProfile = () => {
  const [confirmationModal,setConfirmationModal]= useState(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const{token} = useSelector((state)=>state.auth)
  return (
    <div className="text-richblack-5 w-10/12 mx-auto p-8 flex gap-4 rounded-xl mt-10 mb-16 bg-pink-900">
        <div className="bg-pink-700 rounded-full w-14 h-14 flex items-center justify-center">
            <FiTrash2 className="text-3xl text-pink-200"/>
        </div>
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Delete Account</h2>
            <p className="text-pink-25">Would you like to delete account ?</p>
            <p className="text-pink-25">This account may contain Paid Courses. Deleting your account is permanent and will remove all the contain associated with it.</p>
            <button
              className="text-pink-300"
              onClick={()=>setConfirmationModal({
              text1:"Are you sure ?",
              text2:"Your Account will be deleted",
              btnText1:"Delete",
              btnText2:"Cancel",
              btnHandler1:()=>dispatch(deleteAccount(token,navigate)),
              btnHandler2:()=>setConfirmationModal(null)
            })}>I want to delete my account</button>
        </div>
        {confirmationModal&& <ConfirmationModal modalData={confirmationModal}/>}
    </div>
  )
}

export default DeleteProfile