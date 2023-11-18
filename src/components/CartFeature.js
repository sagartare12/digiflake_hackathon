import React from 'react'

const CartFeature = ({name,image,category,price,isLoading}) => {
  return (
    // <>
    // <div classNmae="w-full min-w-[280px] h-30 bg-slate-red hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer" >
    //  <div className="h-28 flex flex-col justify-center">
    //     <img src={image} alt="" className="h-full" />
    //  </div>
    //  {/* <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">{name}</h3>
    //         <p className="text-center text-slate-500 font-medium">{category}</p>
    //         <p className="text-center font-bold"><span className='text-red-500 font-md'>₹ </span><spna>{price}</spna></p> */}
    // </div>
   
    <div className="w-full min-w-[260px] bg-white h-30 min-h-[260px] cursor-pointer hover:shadow-lg drop-shadow py-5 px-4">
        {name ?
            <>
    <div className="h-28 w-full flex flex-col justify-center ">
        <img src={image} alt="" className="h-full " />
     </div>
      <h3 className="text-center font-semibold text-slate-600  capitalize text-lg mt-4">{name}</h3>
             <p className="text-center  text-slate-500 font-medium">{category}</p>
             <p className="text-center  font-bold"><span className='text-red-500 font-md'>₹ </span><spna>{price}</spna></p>
             <button className="bg-yellow-500 py-1 w-full my-2">Add Cart</button>
            </> :
            <p className="flex h-full justify-center items-center">{isLoading}</p>
}
     </div>
    
  )
}

export default CartFeature
