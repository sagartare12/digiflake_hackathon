import React from 'react'
import { Link } from 'react-router-dom'
import { addCartItems } from '../store/slices/ProductSlice'
import { useDispatch } from 'react-redux'

const CartFeature = ({name,image,category,price,isLoading,id}) => {
  const dispatch=useDispatch()
  const handleAddCartProduct=()=>{
    dispatch(addCartItems({
      _id:id,
      name:name,
      image:image,
      category:category,
      price:price
    }))
   
  }
  return (

   
    <div className="w-full min-w-[260px] max-w-[200px] bg-white h-30 min-h-[260px] cursor-pointer hover:shadow-lg drop-shadow py-5 px-4">
        {name ?
            <>
            <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
    <div className="h-28 w-full flex flex-col justify-center ">
        <img src={image} alt="" className="h-full " />
     </div>
      <h3 className="text-center font-semibold text-slate-600  capitalize text-lg mt-4">{name}</h3>
             <p className="text-center  text-slate-500 font-medium">{category}</p>
             <p className="text-center  font-bold"><span className='text-red-500 font-md'>₹ </span><span>{price}</span></p>
             </Link>
             <button className="bg-yellow-500 hover:bg-yellow-600 py-1 w-full my-2" onClick={handleAddCartProduct}>Add Cart</button>
            
             </> :
            <p className="flex h-full justify-center items-center">{isLoading}</p>
}
     </div>
    
  )
}

export default CartFeature
