import React, {useState,useEffect} from 'react'
import { Link, useLocation,matchPath } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from "../../data/navbar-links"
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import { FaAngleDown } from "react-icons/fa";

const subLinks = [
    {
        title:"Python",
        link:"/catalog/python"
    },
    {
        title:"Web development",
        link:"/catalog/web-dev"
    },
    {
        title:"AI/ML",
        link:"/catalog/web-dev"
    },
    {
        title:"Software development",
        link:"/catalog/web-dev"
    },
]

const Navbar = () => {
const {token} = useSelector((state)=>state.auth);
const {user} = useSelector((state)=>state.profile);
const {totalItems} = useSelector( (state)=>state.cart);

// const [subLinks,setSubLinks] = useState([])
// const fetchSubLinks = async()=>{
//     try{
//         const result = await apiConnector("get",categories.CATEGORIES_API);
//         console.log("printing result",result)
//         setSubLinks(result.data.data)
//     }catch(err){
//         console.log("Could not fetch all category",err)
//     }
// }


// useEffect(()=>{
//     fetchSubLinks()
// },[])

    const location = useLocation()
    const matchRoute = (route)=>{
        return matchPath({path:route},location.pathname)
    }
  return (
    <div className='h-14 border-b text-richblack-5 flex items-center justify-center border-richblack-700'>
        <div className="w-11/12 max-w-maxContent flex items-center justify-between">
            <Link to={"/"}>
                <img src={logo} height={42} width={162} alt="" />
            </Link>
            <nav>
                <ul className='flex gap-x-6'>
                    {
                        NavbarLinks.map((element,index)=>{
                            return (
                                <li key={index}>
                                    {
                                        element.title==="Catalog" ? (<div className="flex relative items-center group gap-[6px]">
                                            <p>{element.title}</p>
                                            <FaAngleDown/>
                                            <div className=" invisible absolute left-[50%] z-10 flex flex-col 
                                            rounded-md bg-richblack-5 p-4 w-[300px] transition-all duration-200 translate-x-[-50%] translate-y-[80%]
                                             text-richblack-900 group-hover:visible">
                                                <div className="absolute p-3 bg-richblack-5 rotate-45
                                                 left-[50%] translate-y-[-45%] top-0 translate-x-[80%]"></div>
                                                {
                                                    subLinks.map((links,index)=>{
                                                      return(<Link className="p-3 rounded-lg hover:bg-richblack-25" to={links.link} key={index}>{links.title}</Link>)
                                                    })
                                                }
                                            </div>
                                        </div>):(
                                            <Link to={element?.path}>
                                                <p className={`${matchRoute(element.path) ?
                                                    "text-yellow-25":"text-richblack-25"}`}>
                                                    {element.title}
                                                </p>
                                            </Link>
                                        )
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className="flex gap-x-4 items-center">
                    {
                        user && user?.accountType !== "Instructor" &&(
                            <Link to="/dashboard/cart" className="relative">
                                <AiOutlineShoppingCart/>
                                {
                                    totalItems > 0 &&(
                                        <span>{totalItems}</span>
                                    )
                                }
                            </Link>
                        )
                    }
                    {
                        token === null &&(
                            <Link to="/login">
                                <button className="border border-richblack-700 bg-richblack-800
                                px-4 py-2 text-richblack-100 rounded-md">
                                    Login
                                </button>
                            </Link>
                        )
                    }
                    {
                        token === null &&(
                            <Link to="/signup" className="border border-richblack-700 bg-richblack-800
                            px-4 py-2 text-richblack-100 rounded-md">
                                <button>Signup</button>
                            </Link>
                        )
                    }
                    {
                        token!==null && <ProfileDropDown/>
                    }
            </div>
        </div>
    </div>
  )
}

export default Navbar