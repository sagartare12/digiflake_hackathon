import React, { useState } from 'react'
import loginSignupImage from '../assets/login-animation.gif';
import {BiShow , BiHide} from 'react-icons/bi'
import {Link} from 'react-router-dom'

const Login = () => {

    const [showPassword,setShowPassword]= useState(false);
    
    const [userData,setUserData]=useState({
        email:"",
        password:"",
    })

    console.log(userData);
    const handleShowPassword=()=>{
        setShowPassword(prev => !prev)
    }
    const handleOnChange=(e)=>{
        const {name,value} = e.target;
        setUserData((prev)=>{
            return {
                 ...prev,
                 [name]:value
                 }
        })
    }

    const handleSubmit=(e)=>{
      e.preventDefault();

      const {email,password} =userData;

      if( !email || !password) return  alert("Please enter required fields")
      
      return alert("Successfull");
    }

  return (
    <div className="p-3 md:p-4  ">
      <div className="w-full max-w-sm bg-white mx-auto flex-col p-4 ">
        {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={loginSignupImage} alt="" className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          {/* <form className="w-full py-3 flex flex-col"> */}
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={userData.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200  rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300 ">
            <input
              type={!showPassword ? "password" : "text"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 outline-0 border-none "
              value={userData.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button type="submit" className="max-w-[120px]   w-full m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white  font-medium text-center py-1 rounded-full mt-4">
            Log In
          </button>
        </form>
       
        <p className="text-sm justify mt-2 ">
          Create a new account ?{" "}
          <Link to="/signup" className="text-red-500  font-bold underline">
            Signup
          </Link>
        </p>
      
      </div>
    </div>
  );
}

export default Login;
