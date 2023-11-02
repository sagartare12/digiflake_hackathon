import React from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import {FaUserAlt,FaShoppingCart} from 'react-icons/fa'
const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50">
        {/* desktop */}
        <div className="flex items-center h-full justify-between" >

            <Link to={"/"}>
            <div className="h-14">
                <img src={logo} alt="" className="h-full" />
            </div>
            </Link>
            <div className="flex items-center gap-3 md:gap-7">
              <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
                <Link to={"/"}>Home</Link>
                <Link to={"/menu"}>Menu</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
              </nav>
              <div className="text-2xl text-slate-600">
                <FaShoppingCart />
              </div>
              <div className="text-2xl text-slate-600">
                <FaUserAlt />
              </div>
            </div>
        </div>

         {/* this is trial */}
        {/* mobile */}
    </header>
  )
}

export default Header