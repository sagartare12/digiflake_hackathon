import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div  onClick={onClick} className="cursor-pointer flex flex-col items-center ">
      <div className={`h-11 w-11 pt-2 pr-1 pb-1 pl-2 bg-yellow-500 rounded-full ${isActive ? "bg-red-600 text-white" : ""}`}>
        <div className={`text-3xl    `}> <ImSpoonKnife /></div>
      </div>
      <p className='text-center text-sm md:text-md overflow-hidden'>{category}</p>
    </div>
  )
}

export default FilterProduct
