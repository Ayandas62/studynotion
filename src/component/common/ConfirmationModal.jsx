import React from 'react'
import CtaButton from "../common/CtaButton"

const ConfirmationModal = ({modalData}) => {
  return (
    <div className="grid place-items-center fixed inset-0 z-[1000] !mt-0  bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="w-11/12 bg-richblack-800 rounded-xl max-w-[350px] border border-richblack-400 p-6">
            <p className="text-2xl font-semibold"
            >{modalData.text1}</p>
            <p className="text-richblack-200 mt-3 mb-5 leading-6">{modalData.text2}</p> 
            <div className="flex gap-x-4">
                <CtaButton onClick={modalData.btnHandler1} text={modalData.btnText1}/> 
                <button className="bg-richblack-700 px-5 py-3 rounded-lg hover:bg-richblack-900" onClick={modalData.btnHandler2}>
                    {modalData.btnText2}
                </button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationModal