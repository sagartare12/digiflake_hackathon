import React, { useState } from 'react'
import logo from './../assets/logo.png'
import { Link,useNavigate } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import {FaCircleUser} from 'react-icons/fa6'
import { useSelector ,useDispatch} from 'react-redux'
import {toast} from 'react-hot-toast'
import { logoutReducer } from '../store/slices/UserSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const [shadowMenu,setShadowMenu] = useState(false);
  const userReducerData = useSelector(state=>state.users.user);

  const handleShowMenu=()=>{
    setShadowMenu(prev => !prev);
  }
  const handleLogout=async()=>{
    const fetchData= await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/users/logout`,{
      method:"GET"
    });

    const dataRes = await fetchData.json();
    console.log(userReducerData)
      if(dataRes.status==='Success'){
        dispatch(logoutReducer());
        toast.success(`User logged out.`)
        navigate('/')
     }else toast.error(dataRes.message)
    }
    
  
  return (
    <header className="fixed bg-white shadow-md w-full h-16 px-2 md:px-4 z-50">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="h-14">
            <img src={logo} alt="" className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-3 md:gap-7">
          <div className="hidden sm:block">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg ">

            <Link to={"/"}>Home</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
          </div>
          <div className="text-2xl text-slate-600 relative">
            <Link to="/cart">
            <FaShoppingCart /> 
            </Link>
            <div className="absolute -top-2 -right-2 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0  text-sm text-center ">
              0
            </div>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer" >
            {userReducerData.image ? <img src={userReducerData.image} alt="" className="w-10 h-10 rounded-full overflow-hidden"/> :<FaCircleUser /> }
            </div>
            {shadowMenu && (
              <div className=" absolute right-2 bg-white py-2 px-3 shadow drop-shadow-md flex flex-col text-center min-w-[128px] ">
                {userReducerData.email===process.env.REACT_APP_ADMIN_EMAIL && <Link to={"/newproduct"} className=" hover:bg-slate-300 whitespace-nowrap cursor-pointer hover:font-medium">New product</Link>}
                {!userReducerData.image ? <Link to={"/login"} className="hover:bg-slate-300 whitespace-nowrap cursor-pointer hover:font-medium">Login</Link> :
                <p className="whitespace-nowrap cursor-pointer hover:bg-slate-300  hover:font-medium" onClick={handleLogout}>Logout<span>({userReducerData.firstName})</span></p> }
                  <nav className="flex flex-col  md:hidden">
            <Link to={"/"} className="hover:bg-slate-300 text-black">Home</Link>
            <Link to={"/menu"} className="hover:bg-slate-300 text-black">Menu</Link>
            <Link to={"/about"} className="hover:bg-slate-300 text-black">About</Link>
            <Link to={"/contact"} className="hover:bg-slate-300 text-black">Contact</Link>
          </nav>
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