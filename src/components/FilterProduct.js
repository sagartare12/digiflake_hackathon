import React from 'react'
import { ImSpoonKnife } from "react-icons/im";
const FilterProduct = ({category}) => {
  return (
    <div>
      <div className="">
        <div className="text-3xl p-3 bg-yellow-500 rounded-full"><ImSpoonKnife /></div>
      </div>
      <p>{category}</p>
    </div>
  )
}

export default FilterProduct
