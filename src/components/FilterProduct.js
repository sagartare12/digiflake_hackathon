import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div  onClick={onClick} className="cursor-pointer">
      <div className="">
        <div className={`text-3xl p-3 bg-yellow-500 rounded-full ${isActive ? "bg-red-600 text-white" : ""}`}><ImSpoonKnife /></div>
      </div>
      <p className='text-center overflow-hidden'>{category}</p>
    </div>
  )
}

export default FilterProduct