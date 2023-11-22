import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CartFeature from '../components/CartFeature'
import AllProducts from '../components/AllProducts'


const Menu = () => {
  const {productid} = useParams()
console.log(productid)
const productsReducer = useSelector((state)=>state.products.product)
console.log(productsReducer)

const productById=productsReducer.filter((el)=>el._id === productid)[0]
const similarProducts = productsReducer.filter((el)=>el.category === productById.category)
console.log("similar products " +similarProducts)
console.log(productById)
  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-4xl bg-white m-auto md:flex text-2xl">
        {
          productById ?
          <>
          <div className="md:w-1/2 shadow overflow-hidden mx-w-sm w-full p-5 ">
            <img src={productById.productImage} alt="" className='mx-auto h-full hover:scale-105 transition-all'/>
          </div>
          <div className="flex flex-col md:gap-1 w-full ml-1 md:ml-4">
          <h3 className="font-semibold md:text-4xl text-slate-600 text-left capitalize text-lg">{productById.name}</h3>
              <p className="text-left text-slate-500 text-lg md:text-2xl font-medium">{productById.category}</p>
              <p className="text-left font-bold"><span className='text-red-500 font-md text-lg md:text-2xl'>₹ </span><spna>{productById.price}</spna></p>
              <div className="flex gap-2 max-w-[250px]">
                 <button className="bg-yellow-500 rounded-sm  hover:bg-yellow-600 py-1 text-xl w-full my-2">Buy</button>
                 <button className="bg-yellow-500 rounded-sm hover:bg-yellow-600 py-1 text-xl w-full my-2">Add Cart</button>
              </div>
              <div className="">
                <p className="text-slate-400 font-medium text-lg md:text-xl">Description : </p>
                <p className="text-1xl text-lg md:text-xl">{productById.description}</p>
              </div>
              </div>
              </>
              : 
              <div className="text-center">Loading...</div>
        }
      </div>
       <AllProducts heading="Related Products" />
    </div>
  )
}

export default Menu