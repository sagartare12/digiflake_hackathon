import React from 'react'
import { MdOutlineHome,MdOutlineArrowRight,MdCardGiftcard } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { BsArchiveFill } from "react-icons/bs";
import { RiHomeWifiFill } from "react-icons/ri";
import { Link,useNavigate } from 'react-router-dom'
const icons = [
  { name: 'Home', icon: RiHomeWifiFill , link:'/'  },
  { name: 'Category', icon: BiSolidCategory , link:'/category'},
  { name: 'Products', icon: MdCardGiftcard , link:'/products'},
  // Add more icons as needed
];
const Sidebar = () => {


  return (
    <div className='h-screen w-1/5 pt-8 bg-gray-200   '>
        {icons.map(({ name, icon: IconComponent,link }) => (
         <div className=" ">
          <Link to={link}>
         <div className=" flex hover:bg-yellow-200  py-1 my-6 items-center">
           <div className='md:text-2xl mx-7  text-xl text-black hover:text-red-500  cursor-pointer' >   <IconComponent /></div>
           <h3 className="font-semibold  w-10 md:text-md text-black text-left capitalize text-md">{name}</h3>
           <div className='md:text-3xl flex ml-10 md:ml-[40%] text-xl text-black hover:text-red-500 cursor-pointer' ><MdOutlineArrowRight /></div>
         </div> 
         </Link>
       </div>
      ))}
  
    

          
      </div>
 
  )
}

export default Sidebar