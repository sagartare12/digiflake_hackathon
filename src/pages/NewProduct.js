import React from 'react'
import {BsCloudUpload} from 'react-icons/bs'
import { imageToBase64 } from '../utility/imageToBase64';
import {useState} from 'react'

const NewProduct = () => {
  
  const [prouctData,setProductData] = useState({});

  const handleOnChange=(e)=>{
    const {name,value} = e.target;
    setProductData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }
  const uploadImage=async(e)=>{
    const uploadProductImage= await imageToBase64(e.target.files[0]);
    console.log(uploadProductImage)
    setProductData((prev)=>{
      return {
        ...prev,
        productImage:uploadProductImage
      }
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(prouctData)
  }
  return (
    <div className=" p-4 ">
      <form onSubmit={handleSubmit} className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white" action="">
        <label htmlFor="name" >Name</label>
        <input type="text" name="name" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} />
        <label htmlFor="category" className="mb-1">Category</label>
        <select name="" id=""  className="bg-slate-200 p-1  mb-2" onChange={handleOnChange}>
          <option value="">Fruits</option>
          <option value="">Vegetable</option>
          <option value="">Ice-cream</option>
          <option value="">Dosa</option>
          <option value="">Pizza</option>
        </select>
        <label htmlFor="image" className="mb-1 cursor-pointer">Upload image
        <div className="h-40 w-full bg-slate-200 my-23 rounded flex items-center justify-center">

          <span className="text-5xl"><BsCloudUpload /></span>
          <input type="file" onChange={uploadImage}  className="hidden" id="image"/>
        </div>
        </label>
        <label htmlFor="price" className='mt-1'>Price</label>
        <input type="text" name="price" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} />

        <label htmlFor="description">Description</label>
        <textarea name="" id="" cols="" rows="3" className='bg-slate-200 p-1 my-1 resize-none'onChange={handleOnChange}/>
        
        <button type='submit' className="bg-red-500 hover:bg-red-600 text-lg text-white font-bold my-2  ">Save</button>
        
      </form>
    </div>
  )
}

export default NewProduct