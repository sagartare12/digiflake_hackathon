import React from 'react'

const About = () => {
  return (
    <div className="md:mx-20">
    <div className="bg-white-400 mt-5 mb-5 mx-5 md:flex">
    <div className="md:w-1/2  justify-center items-center pl-4  bg-white ">
      <p className="text-lg md:text-2xl text-orange-500 my-2 md:my-4 font-bold">Good food, good mood.</p>
      <p className="text-md md:text-lg font-semibold md:my-8">Welcome to sagar e-shop a groundbreaking project that embodies innovation and vision. At the heart of our endeavor lies a commitment to deliver the food that  makes customers happy. As we navigate the ever-evolving landscape of e-restaurant, sagar e-shop stands as a testament to our passion for implement a reliable and efficient food delivery system.</p>
      <div className="flex gap-3">
      <button className="bg-green-400 px-2 py-1 font-semibold rounded-sm my-2">Try once!</button>
      <button className="bg-yellow-400 px-2 py-1 font-semibold rounded-sm my-2">Read more</button>
      </div>
    </div>
    <div className=" md:w-1/2 bg-white">

    
    <div className="justify-center">
        <img src="https://images.ctfassets.net/sv4wepqk8nm7/76SByTKXfmuVi3ts92TDyZ/ad8e23b5e96fe76edbcd372e096b8de9/online_ordering.png?w=900&h=600" alt="" />
      </div>
      </div>
    </div>



    <div className="bg-white-400  pb-5 mx-5 md:mx-20 md:flex">

    <div className=" bg-cover bg-center md:w-1/2 bg-white"> 
<div className="p-2 my-2  cover">
    <img className="m-auto shadow-lg" src="https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2FTakeout_Seated_At_Home_App-1.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=250&q=86&w=375&s=7eaa954aad313eae903091f2a2db93f3" alt="" />
  </div>
  </div>

    <div className="md:w-1/2  justify-center items-center pl-4  bg-white ">
      <p className="text-lg md:text-xl text-slate-700 my-2 md:my-1 font-bold">Our mission</p>
      <ul class="list-disc text-sm md:text-[15px] font-semibold ml-2">
      {/* <li className="text-sm md:text-md font-semibold my-1">We prioritize the needs and preferences of our customers</li>
      <li className="text-sm md:text-md font-semibold my-1">We embrace technological advancements to enhance the dining experience</li>
      <li className="text-sm md:text-md font-semibold my-1">We are dedicated to sourcing the finest ingredients and maintaining the highest standards of food quality.</li>
      <li className="text-sm md:text-md font-semibold my-1">We believe that good food should be accessible to everyone. Our app is designed to be user-friendly, inclusive.</li>
      <li className="text-sm md:text-md font-semibold my-1">We prioritize the health and well-being of our customers by offering nutritious options.</li> */}
      <li className=" my-1">We prioritize the needs and preferences of our customers</li>
      <li className=" my-1">We embrace technological advancements to enhance the dining experience</li>
      <li className=" my-1">We are dedicated to sourcing the finest ingredients and maintaining the highest standards of food quality.</li>
      <li className=" my-1">We believe that good food should be accessible to everyone. Our app is designed to be user-friendly, inclusive.</li>
      <li className=" my-1">We prioritize the health and well-being of our customers by offering nutritious options.</li>

      </ul>
      
      
      
      
    </div>
    
    </div>
    </div>
  )
}

export default About