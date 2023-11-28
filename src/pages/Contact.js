import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addUser } from '../store/slices/UserSlice';
import Users from './Users';

const Contact = () => {
  const dispatch = useDispatch();
  const userList =useSelector(state => state.users)
  const adduser = ()=>{
    let user = {
      id:1,
      name:'sagare'
    }
    dispatch(addUser(user))
  }


  return (
    <div className="p-2 md:p-4">
      <div className="md:flex  gap-2">
        <div className="md:w-1/2  m-2 flex flex-col justify-center md:ml-20 px-2">
          <p className="text-md md:text-xl font-bold my-2 md:my-5">Contact Us</p>
          <p className="text-sm md:text-lg font-semibold">Need to get in touch with us ? Wither fill out the form with your enquiry or find the sagartare204@gmail.com  you like to contact below..</p>
        </div>
        <div className="md:w-1/2  my-2 mx-5  px-5">
          <div className="">
                      <div className="w-full max-w-sm bg-white mx-auto flex-col p-4 ">
                      {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
                             
                      <form className="w-full py-3 flex flex-col" >
                        {/* <form className="w-full py-3 flex flex-col"> */}
                        <label htmlFor="firstName">First name*</label>
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                               
                              />
                                 <label htmlFor="lastName">Last name*</label>
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                               
                              />
                              <label htmlFor="email">E-mail</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                               
                              />

<label htmlFor="enquiry" name="" >What can we help you with ?</label>
        <textarea name="enquiry" id="" cols="" rows="3" className='bg-slate-200 p-1 my-1 resize-none'/>

                              <button type="submit" className="max-w-[120px]   w-full m-auto bg-blue-600 hover:bg-blue-700 cursor-pointer text-white  font-medium text-center py-1 rounded-full mt-4">
                                Submit
                              </button>
                      </form>
                      </div>
        </div> 
      </div>
    </div>
    </div>
  )
}

export default Contact