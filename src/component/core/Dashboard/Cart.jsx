import React from 'react'
import { useSelector } from 'react-redux'

const cart = () => {
    const {totalItems,total} = useSelector((state)=>state.cart)
    

  return (
    <div className="text-richblack-5">
        <h1>Your Cart</h1>
        <p>{totalItems} Courses in your cart</p>
        {
        total > 0 ?
            (<div></div>):
            (<div>Your Cart is Empty</div>)  
        }
    </div>
  )
}

export default cart