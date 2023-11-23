import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct'
import { RiInformationLine } from "react-icons/ri";
import Payment from '../components/Payment';

const Cart = () => {
    const cartProduct= useSelector((state)=>state.products.cartItem)
    // console.log("cart product" + cartProduct[0].name)
    const isLoadingCartProduct  = new Array(5).fill(null)
  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-xl font-bold text-slate-600">Your Cart Items</h2>
      <div className="my-4  gap-2 flex flex-col md:flex-row">
        {/* display cart items */}
        <div className="w-full max-w-2xl rounded mx-auto ">
            {
                cartProduct[0] ? cartProduct.map((el,index)=>{
                    return (
                        <CartProduct  key={index}
                        id={el._id}
                        name={el.name}
                        image={el.image}
                        category={el.category}
                        price={el.price}
                        quantity={el.qty}
                        total={el.total}
                        />
                    )
                }):
                isLoadingCartProduct.map((el,index)=>{
                    return (
                        <CartProduct  key={index} />
                    )
                })
            }
        </div>
        {/* display total cart items */}
        <div className="">
         
        </div>
            <Payment />
      </div>
    </div>
  )
}

export default Cart
