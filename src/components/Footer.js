import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/sagar_shop.jpg'
import { FaInstagram , FaGithub ,FaLinkedinIn  } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
    <div>
       <div class="bg-gray-800   text-white py-4">
                <div className="p-4 ">
                {/* <div className="md:flex gap-2 space-y-10 mb-5 h-[100px]">
                <div className=" md:w-1/4  bg-white h-[5px]">ji</div>
                <div className=" md:w-1/4 bg-white  h-[5px]">ji</div>
                <div className=" md:w-1/4 bg-white  h-full">ji</div>
                <div className=" md:w-1/4 bg-white  h-full">ji</div>
                </div> */}
                
                <div className=" w-full  md:flex items-center  min-h-[30px]  ">
                    
                    <div className=" md:w-2/4 bg-slate-100 text-slate-800  m-2 p-2 e py-2 ">
                        <div className="flex justify-between items-center">
                        <Link to={"/"}>
                            <div className="h-10 md:h-14">
                                <img src={logo} alt="" className="h-full" />
                            </div>
                        </Link>
                        <div className="flex">
                            <div className="bg-red-600 p-2 shadow-2xl text-sm md:text-xl text-white rounded-full mx-1 md:mx-2 cursor-pointer"><CgMail /></div>
                            <div className="bg-slate-900 p-2 shadow-2xl text-sm md:text-xl text-white rounded-full mx-1 md:mx-2 cursor-pointer"><FaGithub /></div>
                            <div className="bg-pink-800 p-2 shadow-2xl text-sm md:text-xl text-white rounded-full mx-1 md:mx-2 cursor-pointer"><FaInstagram /></div>
                            <div className="bg-blue-700 p-2 shadow-2xl text-sm md:text-xl text-white rounded-full mx-1 md:mx-2 cursor-pointer"><FaLinkedinIn /> </div>
                        </div>
                        </div>
                        <p className="text-sm md:text-lg">Our cutting-edge e-commerce platform delivers a seamless online food ordering service. Established with passion, we're committed to reshaping how you enjoy your favorite meals, one order at a time</p>
                       
                    </div>
                    <div className=" md:w-1/4 text-slate-100 m-2 p-2 b py-2 ">
                        <h5 className="font-bold text-md my-2">COMPANY</h5>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Partnerships</p>
                    </div>
                    <div className=" md:w-1/4 text-slate-100 m-2 p-2 b py-2 ">
                        <h5 className="font-bold text-md my-2">SOCIAL</h5>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Linkedn</p>
                    </div>
                </div>
        <div class="container mx-auto text-center">
            <p>&copy; 2023 sagar e-shop. All rights reserved.</p>
            
        </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
