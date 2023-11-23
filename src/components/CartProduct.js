import React, { useCallback, useEffect }  from 'react'
import { MdDelete } from "react-icons/md";
import { deleteCartItems,inacreaseQty,decreaseQty } from '../store/slices/ProductSlice';
import { useDispatch } from 'react-redux';

const CartProduct = ({id,name,image,category,price,quantity,total}) => {
  const dispatch= useDispatch()
  const handleDeleteCartItem=()=>{
    console.log('ji')
    dispatch(deleteCartItems(id));
   
  }
  return (
    <div className="bg-slate-200 p-2 flex border-2 border-slate-300 my-1">
      {name ? 
      <>
            <div className="p-3 bg-white rounded overflow-hidden">
        <img src={image} alt="" className="h-23 w-36 object-cover" />
      </div>
      <div className="flex flex-col md:gap-1 w-full ml-1 md:ml-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold md:text-xl text-slate-600 text-left capitalize text-md">{name}</h3>
          <div className='md:text-2xl text-xl text-slate-700 hover:text-red-500  cursor-pointer' onClick={handleDeleteCartItem}><MdDelete /></div>
          </div>
          <p className="text-left text-slate-500 text-sm md:text-base font-medium">{category}</p>
          <p className="text-left font-bold text-sm md:text-base"><span className='text-red-500 font-md '>₹ </span><span>{price}</span></p>
          <div className="flex justify-between font-bold items-center gap-1 ">
            <div className="flex items-center gap-1">
            <button onClick={()=>dispatch(inacreaseQty(id))} className="bg-slate-300 rounded-sm  hover:bg-slate-400 h-[30px] w-[40px] md:w-[70px] text-md   my-2">+</button>
            <p className="font-bold">{quantity ? quantity : 0}</p>
            <button onClick={()=>dispatch(decreaseQty(id))}  className="bg-slate-300 rounded-sm hover:bg-slate-400 h-[30px] w-[40px] md:w-[70px] text-xl  my-2 " >-</button>
            </div>
            <div className="flex text-sm md:text-base text-slate-700 gap-1 md:gap-2">
              <p>Total:</p>
              <p className="text-center  font-bold"><span className='text-slate-700 font-md'>₹ </span><span>{total ? total :0}</span></p>
              {/* <p>2</p> */}
            </div>
          </div>
         
      </div>
      </>
    :  
    <>
        <div className="p-3 h-[100px] bg-white rounded overflow-hidden">
        <img src="" alt="" className="h-23 w-36 object-cover" />
      </div>
    </>
    }

    </div>
  )
}

export default CartProduct
