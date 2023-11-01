import React from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4">
        {/* desktop */}
        <div className="flex items-center h-full" >
            <Link to={"/"}>
            <div className="h-14">
                <img src={logo} alt="" className="h-full" />
            </div>
            </Link>
            <div className="">
              <nav></nav>
              <div className="">
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