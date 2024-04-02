import React from 'react'
import {useState} from 'react'
import { addProductReducer} from '../store/slices/ProductSlice';
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {toast} from 'react-hot-toast'


const AddNewProduct = () => {
  const navigate  = useNavigate();

  const dispatch = useDispatch();
    const [productData,setProductData] = useState({
      
        name:"",
        category:"",
        image:"",
        packSize:"",

      mrp:"",
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



    const handleSubmit=async(e)=>{
      e.preventDefault();
      console.log(productData)
    
      const {name,packSize,status,category,mrp,image} =productData;
      if( !name || !packSize || !status ||!category|| !mrp ||!image ) return  toast.error("Please enter required fields")
      const fetchdata=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/dProduct/createDProduct`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      credentials: 'include', 
      body:JSON.stringify(productData)
    })
    
    const dataRes= await fetchdata.json();
    console.log(dataRes)
      
     if(dataRes.status==='Success'){
        dispatch(addProductReducer(dataRes));
        toast.success("Product created successfully.")
        setTimeout(()=>{
          navigate('/products')
        },1000);
     }else toast.error(dataRes.message)
    }


  return (
    <div className='w-full bg-white'>
        
<h3 className='font-bold mt-6 ml-8 text-lg'>Add Product</h3>
      <form className="w-full py-2 flex flex-col" onSubmit={handleSubmit}>
        <div className="flex justify-between mx-6">
            <div className="">
      <label htmlFor="category"/>
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
    <label htmlFor="name"/>
      <div className="relative w-full my-8  left-0 right-0 mx-auto">
      <input
              type="text"
                      id="name"
                      name="name"
                      value={productData.name}
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
    <label htmlFor="image"/>
      <div className="relative w-full my-8  left-0 right-0 mx-auto">
      <input
              type="text"
                      id="image"
                      name="image"
                      value={productData.image}
                      onChange={handleOnChange}
        className="block w-full py-2 px-20 border border-gray-300  focus:outline-none focus:border-purple-800  placeholder-transparent rounded-md"
      />
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">Product Image</div>
      </div>
    </div>
    </div>

    <div className="">
    <label htmlFor="status"/>
      <div className="relative w-full my-8 left-0 right-0 mx-auto">
     
       <select name="status" id=""  className="block w-[350px] py-2 px-20 border border-gray-300  focus:outline-none focus:border-purple-800   placeholder-transparent rounded-md" onChange={handleOnChange} value={productData.status}>
          <option value="N.A.">N.A.</option>
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
