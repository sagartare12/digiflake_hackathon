import React, { useRef, useState ,useEffect } from 'react'
import HomeCard from '../components/HomeCard';
import { useSelector } from 'react-redux';
import CartFeature from '../components/CartFeature';
import { GrPrevious ,GrNext } from "react-icons/gr";
import { ImSpoonKnife } from "react-icons/im";
import FilterProduct from '../components/FilterProduct';
import AllProducts from '../components/AllProducts';
import { TbTruckDelivery } from "react-icons/tb";

const Home = () => {

  const allProductsReducer = useSelector(state=>state.products.product);
  const homeProductCardList = allProductsReducer.slice(0,4) 
  // console.log(homeProductCardList)
  const vegetableProductList = allProductsReducer.filter((el)=> el.category === "Veg",[])
  console.log(vegetableProductList)

  const isLoadingHomeCard = new Array(4).fill(null)
  const isLoadingVegCard = new Array(5).fill(null)
  const isLoadingAllProducts = new Array(5).fill(null)
  const slideProductRef = useRef();
  const prevProduct=()=>{
    slideProductRef.current.scrollLeft +=200;
  }

  const nextProduct=()=>{
    slideProductRef.current.scrollLeftt +=200;
  }

  const rightScroll=()=>{
    slideProductRef.current.scrollLeftt -=200;
  }

  const categoryList =[...new Set(allProductsReducer.map((el)=>el.category))]
 
  //filter product by given category

  const [filterBy , setFilterBy]=useState("")
  const [defaultFilter,setDefaultFilter]=useState([])
console.log("defult filter"+defaultFilter)
  const handleFilterProduct =(category)=>{
    setFilterBy(category)
  }
  useEffect(()=>{
    const filter =filterBy ? allProductsReducer.filter((el)=>el.category.toLowerCase() === filterBy.toLowerCase()) : allProductsReducer
    console.log(filter)
    setDefaultFilter(()=>{
      return [
        ...filter
      ]
    })

  },[filterBy])

  //  console.log(Object.keys(allProductsReducer).slice(0,4))
// console.log(allProductsReducer)
  return (
  
    <div class="mx-auto pt-[7%] ">
 {/* <div className=''>
  <img className='' src="https://s3-alpha-sig.figma.com/img/9e94/6a94/4ef20bfd62fdde437d3084005e68980d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3k7BbLS1ZCOyhtNEu1X~mFsKmPn~9AvZtoKq9u~tIkrDJakrQR95wr~x7Iu41r16AIE0QzkD0ECT3tlIcnX88aONIqMlmR3udv2tMlJhKDhbtCqEwG5SBrhBTFdoX3rl-MQ-2OHrU8N9IyL~dsiIkbUTDwcXZ6z9v-9zxp2F~3puBaBIGS0~iPJHDQC8yVXCB72dExnc4Pok2teadkqPkMpjsweuS9KMFlUbakN4wvJaE7HXsFi72SDO7X4EfsENMp8Dx9BhUdftMMv0qNZy5w8LhrT3mo6UHuiTIzEOSBef10RHcnsEaxXenzPtjGW1iJIRNBbwjIHygmLTdNbVQ__" alt="" />
 </div> */}
 <div className='md:text-2xl flex justify-center text-xl text-slate-700 hover:text-red-500 cursor-pointer'>
        <img src="https://s3-alpha-sig.figma.com/img/9e94/6a94/4ef20bfd62fdde437d3084005e68980d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3k7BbLS1ZCOyhtNEu1X~mFsKmPn~9AvZtoKq9u~tIkrDJakrQR95wr~x7Iu41r16AIE0QzkD0ECT3tlIcnX88aONIqMlmR3udv2tMlJhKDhbtCqEwG5SBrhBTFdoX3rl-MQ-2OHrU8N9IyL~dsiIkbUTDwcXZ6z9v-9zxp2F~3puBaBIGS0~iPJHDQC8yVXCB72dExnc4Pok2teadkqPkMpjsweuS9KMFlUbakN4wvJaE7HXsFi72SDO7X4EfsENMp8Dx9BhUdftMMv0qNZy5w8LhrT3mo6UHuiTIzEOSBef10RHcnsEaxXenzPtjGW1iJIRNBbwjIHygmLTdNbVQ__" alt="Image 2" className="w-[60%] h-full" />
      </div>
 <div className="text-center py-5 font-semibold text-2xl">
 <h3>Welcome to Digitalflake Admin</h3>
 </div>
  </div>
  );
}

export default Home