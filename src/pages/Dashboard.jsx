import React from 'react'
import Sidebar from '../component/core/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    const {loading:authLoading} = ((state)=>state.auth)
    const {loading:profileLoading} = ((state)=>state.profile)

  if(authLoading||profileLoading){
    return (
      <div className="">
        Loading...
      </div>
    )
  }

  return (
    <div className="relative flex h-[calc(100vh-3.5rem)]">
        <Sidebar/>
        <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
          <div className="w-11/12 mx-auto max-w-[1000px]]">
            <Outlet/>          
          </div>
        </div>
    </div>
  )
}

export default Dashboard