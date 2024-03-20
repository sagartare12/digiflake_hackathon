import React from 'react'
import {useState} from 'react'
const AddNewCategory = () => {

  const [categoryData,setCategoryData] = useState({
    categoryName:"",
    description:"",
    status:""
  });


  const handleOnChange=(e)=>{
    const {name,value} = e.target;
    setCategoryData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    }) 
}
  return (
    <div className='w-full bg-white'>

<h3 className='font-bold mt-6 ml-8 text-lg'>Add Category</h3>

      <form className="w-full py-2 flex flex-col" onSubmit="#">
        <div className="flex justify-between mx-6">
            <div className="">
      <label htmlFor="categoryName"/>
      <div className="relative w-full my-8  left-0 right-0 mx-auto ">
      <input
              type="text"
                      id="categoryName"
                      name="categoryName"
                      value={categoryData.categoryName}
                      onChange={handleOnChange}
        className="block w-full py-2 px-20 border border-gray-300  focus:outline-none focus:border-purple-800 placeholder-transparent rounded-md"
      />
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">Category Name</div>
      </div>
    </div>
    </div>


<div className="">
    <label htmlFor="emaidescriptionl"/>
      <div className="relative w-full my-8  left-0 right-0 mx-auto">
      <input
              type="text"
                      id="description"
                      name="description"
                      value={categoryData.description}
                      onChange={handleOnChange}
        className="block w-full py-2 px-20 border border-gray-300  focus:outline-none focus:border-purple-800  placeholder-transparent rounded-md"
      />
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">Description</div>
      </div>
    </div>
    </div>

    <div className="">
    <label htmlFor="status"/>
      <div className="relative w-full my-8 left-0 right-0 mx-auto">
      <input
              type="text"
                      id="status"
                      name="status"
                      value={categoryData.status}
                      onChange={handleOnChange}
        className="block w-full py-2 px-20 border border-gray-300  focus:outline-none focus:border-purple-800   placeholder-transparent rounded-md"
      />
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">Status</div>
      </div>
    </div>
    </div>
    </div>





<div className="flex justify-end mx-6 mt-80 font-semibold">

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

export default AddNewCategory
