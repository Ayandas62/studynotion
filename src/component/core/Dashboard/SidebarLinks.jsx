import React from 'react'
import * as Icons from "react-icons/vsc";
// import { useDispatch } from 'react-redux';
import { matchPath, NavLink, useLocation } from 'react-router-dom';


const SidebarLinks = ({link,iconName}) => {
  const Icon = Icons[iconName]
  const location = useLocation()
  // const dispatch = useDispatch();

  const matchRoute = (route)=>{
    return matchPath({path:route},location.pathname)
  } 

  return (
    <NavLink 
    to={link.path}
    className={`${matchRoute(link.path)?"bg-yellow-600 border-l-4 border-l-yellow-200":"bg-opacity-0"} p-3 flex items-center gap-2 `}
    >
      <Icon className=""/>
      <span>{link.name}</span>
    </NavLink>
  )
}

export default SidebarLinks