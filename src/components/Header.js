import React from 'react'
import logo from './../assets/logo.png'
const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4">
        {/* desktop */}
        <div className="flex items-center h-full" >
            <div className="h-14">
                <img src={logo} alt="" className="h-full" />
            </div>
        </div>

         {/* this is trial */}
        {/* mobile */}
    </header>
  )
}

export default Header