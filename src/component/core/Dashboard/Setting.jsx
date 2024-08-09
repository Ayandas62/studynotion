import React from 'react'
import UpdateProfile from './Setting/UpdateProfile'
import ChangePassword from './Setting/ChangePassword'
import DeleteProfile from './Setting/DeleteProfile'

const Setting = () => {
  return (
    <div>
      <h1>Edit Profile</h1>
      <UpdateProfile/>
      <ChangePassword/>
      <DeleteProfile/>
    </div>
  )
}

export default Setting