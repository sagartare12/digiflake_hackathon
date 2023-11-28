import React from 'react'
import {BsCloudUpload} from 'react-icons/bs'
import { imageToBase64 } from '../utility/imageToBase64';
import {useState} from 'react'
import {useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'
import { useDispatch,useSelector } from 'react-redux';
import { addProductReducer } from '../store/slices/ProductSlice';


const NewProduct = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const productReducerData= useSelector(state=>state.products)
console.log(productReducerData);
  const [productData,setProductData] = useState({
    name:"",
    category:"",
    productImage:"",
    price:"",
    description:""
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
    const {name,category,productImage,price,description} = productData;
    console.log(productData)

    if ( name && category && productImage && price && description){

      const fetchData= await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/products/createproduct`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(productData)
      })

      const dataRes = await fetchData.json();

      if(dataRes.status==="Success"){
        dispatch(addProductReducer(dataRes))
        toast.success("Product has been created successfully");
        // navigate('/newproduct')
        setProductData({
          name:"",
          category:"",
          productImage:"",
          price:"",
          description:""
        });
      }else toast.error(dataRes.message)


    }else toast.error("Please enter required fields")
    }
  return (
    <div className=" p-4 ">
      <form onSubmit={handleSubmit} className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white" action="">
        <label htmlFor="name" >Name</label>
        <input type="text" name="name" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={productData.name}/>
        <label htmlFor="category" className="mb-1">Category</label>
        <select name="category" id=""  className="bg-slate-200 p-1  mb-2" onChange={handleOnChange} value={productData.category}>
          <option value="Fruits">Fruits</option>
          <option value="Veg">Vegetable</option>
          <option value="Non-veg">Non-vegetable</option>
          <option value="Burger">Burger</option>
          <option value="Dosa">Dosa</option>
          <option value="Pizza">Pizza</option>
        </select>
        <label htmlFor="image" className="mb-1 cursor-pointer">Upload image
        <div className="h-40 w-full bg-slate-200 my-23 rounded flex items-center justify-center">

          {!productData.productImage ?<span className="text-5xl"><BsCloudUpload /></span> :
          <img src={productData.productImage} alt="" className="h-full "/>}
          <input type="file" onChange={uploadImage} accept="image/" className="hidden" id="image" />
        </div>
        </label>
        <label htmlFor="price" className='mt-1'>Price</label>
        <input type="text" name="price" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={productData.price}/>

        <label htmlFor="description" name="" >Description</label>
        <textarea name="description" id="" cols="" rows="3" className='bg-slate-200 p-1 my-1 resize-none'onChange={handleOnChange} value={productData.description}/>
        
        <button type='submit' className="bg-red-500 hover:bg-red-600 text-lg text-white font-bold my-2  ">Save</button>
        
      </form>
    </div>
  )
}

export default NewProduct