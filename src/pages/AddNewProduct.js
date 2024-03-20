import React from 'react'
import {useState} from 'react'
const AddNewProduct = () => {

    const [productData,setProductData] = useState({
        name:"",
        category:"",
        productImage:"",
        price:"",
        description:"",
        status:""
      });
    const handleOnChange=(e)=>{
        const {name,value} = e.target;
        setProductData((prev)=>{
          return {
            ...prev,
            [name]:value
          }
        }) 
    }
  return (
    <div className='w-full bg-white'>
        
<h3 className='font-bold mt-6 ml-8 text-lg'>Add Product</h3>
      <form className="w-full py-2 flex flex-col" onSubmit="#">
        <div className="flex justify-between mx-6">
            <div className="">
      <label htmlFor="email"/>
      <div className="relative w-full my-8  left-0 right-0 mx-auto ">
      <input
              type="text"
                      id="category"
                      name="category"
                      value={productData.category}
                      onChange={handleOnChange}
        className="block w-full py-2 px-20 border border-gray-300  focus:outline-none focus:border-purple-800 placeholder-transparent rounded-md"
      />
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">Category</div>
      </div>
    </div>
    </div>


<div className="">
    <label htmlFor="productName"/>
      <div className="relative w-full my-8  left-0 right-0 mx-auto">
      <input
              type="text"
                      id="productName"
                      name="productName"
                      value={productData.productName}
                      onChange={handleOnChange}
        className="block w-full py-2 px-20 border border-gray-300  focus:outline-none focus:border-purple-800  placeholder-transparent rounded-md"
      />
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">Product Name</div>
      </div>
    </div>
    </div>

    <div className="">
    <label htmlFor="packSize"/>
      <div className="relative w-full my-8 left-0 right-0 mx-auto">
      <input
              type="text"
                      id="packSize"
                      name="packSize"
                      value={productData.packSize}
                      onChange={handleOnChange}
        className="block w-full py-2 px-20 border border-gray-300  focus:outline-none focus:border-purple-800   placeholder-transparent rounded-md"
      />
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">Pack Size</div>
      </div>
    </div>
    </div>
    </div>


{/* Second row */}
    <div className="flex justify-between mx-6">
            <div className="">
      <label htmlFor="mrp"/>
      <div className="relative w-full my-8 left-0 right-0 mx-auto">
      <input
              type="text"
                      id="mrp"
                      name="mrp"
                      value={productData.mrp}
                      onChange={handleOnChange}
        className="block w-full py-2 px-20 border border-gray-300  focus:outline-none focus:border-purple-800   placeholder-transparent rounded-md"
      />
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">MRP</div>
      </div>
    </div>
    </div>




<div className="">
    <label htmlFor="productImage"/>
      <div className="relative w-full my-8  left-0 right-0 mx-auto">
      <input
              type="text"
                      id="productImage"
                      name="productImage"
                      value={productData.productImage}
                      onChange={handleOnChange}
        className="block w-full py-2 px-20 border border-gray-300  focus:outline-none focus:border-purple-800  placeholder-transparent rounded-md"
      />
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">Product Image</div>
      </div>
    </div>
    </div>

    <div className="">
    <label htmlFor="email"/>
      <div className="relative w-full my-8 left-0 right-0 mx-auto">
     
       <select name="status" id=""  className="block w-[350px] py-2 px-20 border border-gray-300  focus:outline-none focus:border-purple-800   placeholder-transparent rounded-md" onChange={handleOnChange} value={productData.status}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        
        </select>
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">Status</div>
      </div>
    </div>
    </div>
    </div>


<div className="flex justify-end mx-6 mt-60 font-semibold">

    <button type="text" className="max-w-[120px] mx-6  w-full  border border-purple-800 hover:bg-red-200 cursor-pointer text-black  text-center py-1 rounded-full mt-4">
            Cancel
          </button>

          <button type="submit" className="max-w-[120px]  mx-6   w-full   cursor-pointer bg-purple-900 hover:bg-purple-700 text-white   text-center py-1 rounded-full mt-4">
            Save
          </button>
</div>
      </form>
    </div>
  )
}

export default AddNewProduct
