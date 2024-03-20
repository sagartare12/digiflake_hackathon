import React, { useEffect, useState } from 'react'
import logo from './../assets/logoD.png'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useSelector ,useDispatch} from 'react-redux'
import { IoNotificationsSharp } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai"
import { FaSearch } from "react-icons/fa";
import { loginReducer,logoutReducer,logoutRedu } from '../store/slices/UserSlice';
import {toast} from 'react-hot-toast'
import { FaRegCircleUser } from "react-icons/fa6";

 const Header = () => {
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const userReducerData = useSelector((state)=>state.users.user)
  console.log(userReducerData)
  const [shadowMenu,setShadowMenu] = useState(false);
  const handleShowMenu=()=>{
    setShadowMenu(prev => !prev);
  }


  const handleProfile=async()=>{

  setTimeout(()=>{
    navigate('/profile')
  },1000);
  }

  const handleLogout=async()=>{

    const token=userReducerData.access_token
    // const fetchData= await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/users/logout`,{}, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-auth-token':  token // Include your actual token valu
    //   },
    // });

    const fetchdata=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/users/logout`,{
      method:'POST',
      headers:{
        'content-type':'application/json',
       
      },
      credentials: 'include', 
      body:JSON.stringify()
    })



    const dataRes= await fetchdata.json();
    console.log(dataRes)
if(dataRes.status==='Logged out!'){
  dispatch(logoutRedu(dataRes));
  toast.success(dataRes.status)
  setTimeout(()=>{
    navigate('/')
  },1000);
}else toast.error("Error")
}
  
  return (
    <header className="fixed bg-purple-900 shadow-md w-full h-10 md:h-16 px-2 md:px-10 z-50">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="h-10 md:h-14 flex items-center text-white">
            {/* <img src={logo} alt="" className="h-full" /> */}
            <span className='bg-gradient-to-tr from-purple-900 via-purple-800  to-red-800  px-2 py-[1px] rounded-md border border-white font-semibold text-4xl'>D</span>
            <span className='font-semibold text-2xl ml-2'>digitalflake</span>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          {/* <div className="hidden sm:block">
         
          </div> */}
      
           
        
            <div className=" text-white" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer" >
            <FaRegCircleUser />
            </div>
            {shadowMenu && (
              <div className=" absolute right-2 bg-white  mt-10 flex flex-col text-center min-w-[128px] ">
      
             
               
                <button onClick={handleLogout} className="bg-red-100  border  border-red-500  hover:bg-red-600 text-red-600   hover:text-white  font-bold py-2 px-4 rounded shadow drop-shadow-md">
  Logout
</button>


              </div>
            )}
           
          </div>
        
            
           
          
        </div>
      </div>

      {/* this is trial */}
      {/* mobile */}
    </header>
  );
}
export default Header