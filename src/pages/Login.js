import React, { useState } from 'react'
import loginSignupImage from '../assets/login-animation.gif';
import {BiShow , BiHide} from 'react-icons/bi'
import {Link,useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { useDispatch,useSelector } from 'react-redux';
import { loginReducer } from '../store/slices/UserSlice';
import logo from './../assets/logoD.png'
import axios from 'axios';

const Login = () => {
  const navigate  = useNavigate();

  const dispatch = useDispatch();
    const [showPassword,setShowPassword]= useState(false);
    
    const [userData,setUserData]=useState({
        email:"",
        password:"",
    })

    const userReducerData = useSelector(state=>state);


    const handleShowPassword=()=>{
        setShowPassword(prev => !prev)
    }
    const handleOnChange=(e)=>{
        const {name,value} = e.target;
        setUserData((prev)=>{
            return {
                 ...prev,
                 [name]:value
                 };
        })
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();

      const {email,password} =userData;
      if( !email || !password) return  alert("Please enter required fields")
      const fetchdata=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/users/login`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      credentials: 'include', 
      body:JSON.stringify(userData)
    })

    const dataRes= await fetchdata.json();
  console.log(dataRes)
      
     if(dataRes.status==='Success'){
        dispatch(loginReducer(dataRes));
        toast.success(`Thank you for login 🙏`)
        setTimeout(()=>{
          navigate('/')
        },1000);
     }else toast.error(dataRes.message)
    }

  return (

<form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
    <div className="w-[580px] h-[620px] bg-white absolute top-[40px] left-[46px] rounded-lg shadow-lg" style={{ boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.75)' }}>
    {/* Your content here */}
    <div className="w-[150px] h-[75px]  mt-[40px] left-0 right-0 mx-auto ">
        <img src={logo} alt="My Image" className="w-full h-full object-cover rounded-lg" />
      </div>
      
      <div className="left-0 right-0  ">
        <h1 className="font-poppins text-center  font-normal leading-48 tracking-normal ">
        Welcome to Digitalflake Admin
        </h1>
      </div>
{/* username */}
<label htmlFor="email"/>
      <div className="relative w-[500px] my-12 top-8 left-0 right-0 mx-auto">
      <input
              type="email"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={handleOnChange}
        className="block w-full py-2 px-3 border border-gray-300  focus:outline-none focus:border-blue-500 placeholder-transparent"
      />
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">Email ID</div>
      </div>
    </div>
{/* Password */}
<label htmlFor="password"/>
    <div className="relative w-[500px] my-12 top-8 left-0 right-0 mx-auto">
      <input
       type={!showPassword ? "password" : "text"}
                 id="password"
                 name="password"    
                 value={userData.password}
                 onChange={handleOnChange}
        className="block w-full py-2 px-3 border border-gray-300  focus:outline-none focus:border-blue-500 placeholder-transparent"
      />
     
      <div className="absolute inset-x-0 top-[-10px] flex items-center ml-5 justify-left">
        <div className="bg-white px-2">Password</div>
      </div>
      <span
              className=" absolute ml-[450px] inset-x-0 top-3 ml-30  text-xl cursor-pointer "
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
    </div>
{/* forgot */}
    
<div className="flex justify-end">
  <div className="bg-white mt-4 text-purple-700  px-8 mr-4 text-right">Forgot Password</div>
</div>
{/* 
button */}

<div className='px-10 mt-10'>
<button type="submit" className="  w-full m-auto bg-purple-800    cursor-pointer text-white  font-medium text-center py-2  mt-8">
        Log In
          </button>
          </div>

          <p className="text-sm mx-10  justify mt-5 ">
           Create a new account ?{" "}
         <Link to="/signup" className="text-purple-800  font-bold underline">
            Signup
          </Link>
         </p>
  </div>
</form>

  );
}

export default Login;
