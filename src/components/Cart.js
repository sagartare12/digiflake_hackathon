import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'
import { RiInformationLine } from "react-icons/ri";
import Payment from '../components/Payment';

const Cart = () => {
    const cartProduct= useSelector((state)=>state.carts.cartItems)
    const userCart= useSelector((state)=>state.carts.userCarts)
    const cartItemNumber= useSelector((state)=>state.carts.cartItems)
    // console.log("cart product" + cartProduct[0].name)
    const isLoadingCartProduct  = new Array(2).fill(null)
    const totalPrice = cartProduct.reduce((acc,curr)=>acc+parseInt(curr.total),0);
    console.log(cartItemNumber[0])
  return (
    <div className="flex">
    <div className="w-1/2 h-10 bg-gray-200">Column 1</div>
    <div className="w-1/2 h-10 bg-gray-300">Column 2</div>
  <h1>ji</h1>
  <h1>ji</h1>
  <h1>ji</h1>
  
  <h1>ji</h1>
  <h1>ji</h1>
  </div>

   
  )
}

export default Cart



{/* <div className="">
<div className="">
  <img src="data:image/png;base64,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" alt="" />
</div>
</div> */}
