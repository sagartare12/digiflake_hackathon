import React from 'react'
import { Link } from 'react-router-dom'
import { addCartItems } from '../store/slices/ProductSlice'
import { useDispatch } from 'react-redux'
import {toast} from 'react-hot-toast'
import { addCartReducer } from '../store/slices/CartSlice'


const CartFeature = ({name,image,category,price,isLoading,id}) => {
  const dispatch=useDispatch()
  const handleAddCartProduct=async()=>{

    // old code
    // dispatch(addCartItems({
    //   _id:id,
    //   name:name,
    //   image:image,
    //   category:category,
    //   price:price
    // }))

    // new code
    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/users/cart/${id}`,{
      method:"POST",
      headers:{
        'content-type':'application/json',
        
      },
    credentials:'include', 
    
    })
    const dataRes= await fetchData.json();
    console.log(dataRes)
    if(dataRes.status==='Success'){
      dispatch(addCartReducer(dataRes.updatedCart));
      toast.success(dataRes.message)
      
   }else toast.error(dataRes.message)
   
  }
  return (

   
    <div className=" w-[150px] min-w-[150px] md:min-w-[200px] md:max-w-[250px] bg-white   md:h-30  md:min-h-[260px] cursor-pointer hover:shadow-lg drop-shadow py-5 px-4">
        {name ?
            <>
            <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
    <div className="h-22 md:h-28 w-full mx-auto md:max-w-[120px] flex flex-col justify-center ">
        <img src={image} alt="" className="h-full " />
     </div>
      <h3 className="text-center font-semibold text-slate-600  capitalize text-sm md:text-lg md:mt-4">{name}</h3>
             <p className="text-center  text-slate-500 font text-sm md:text-md">{category}</p>
             <p className="text-center  font-bold"><span className='text-red-500 text-sm md:text-md'>₹ </span><span>{price}</span></p>
             </Link>
             <button className="bg-yellow-500 hover:bg-yellow-600 md:py-1 w-full md:my-2" onClick={handleAddCartProduct}>Add Cart</button>
            
             </> :
            <p className="flex h-full justify-center items-center">{isLoading}</p>
}
     </div>
    
  )
}

export default CartFeature
