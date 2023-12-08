import React from 'react'
import { Link } from 'react-router-dom';

const HomeCard=({name,image,category,price,isLoading,id})=>{
    console.log(name);
    return (
        <div className=" bg-slate-100 shadow-md  md:h-[140px]">
            {name ?
                <div>
                    <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
                     {/* <div className=" w-[100px] md:w-40 h-[100px] md:min-h-[140px] md:max-h-[150px]"> */}
                        <div className="h-[100px] p-1 md:h-[140px] w-[100px] md:w-[140px] ">
                        <img src={image} alt="" className="h-full w-full"/>
                     </div>
                     {/* <h3 className="font-semibold text-slate-800 text-center capitalize text-sm md:text-lg">{name}</h3>
                     <p className="text-center text-slate-800 text-sm md:text-lg">{category}</p>
                     <p className="text-center font-bold text-sm md:text-lg"><span className='text-red-500 '>₹ </span><spna>{price}</spna></p> */}
                    </Link>
                </div> :
                <div className="flex justify-center items-center h-full"><p>{isLoading}</p></div>
                
            }
           
        </div>
    )
}
export default HomeCard;