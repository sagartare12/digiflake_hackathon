import React, { useRef, useState ,useEffect } from 'react'
import HomeCard from '../components/HomeCard';
import { useSelector } from 'react-redux';
import CartFeature from '../components/CartFeature';
import { GrPrevious ,GrNext } from "react-icons/gr";
import { ImSpoonKnife } from "react-icons/im";
import FilterProduct from '../components/FilterProduct';
import AllProducts from '../components/AllProducts';
import { TbTruckDelivery } from "react-icons/tb";

const Home1 = () => {

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
<div className="flex">
  <div className="w-1/2 h-5 bg-gray-200">Column 1</div>
  <div className="w-1/2 bg-gray-300">Column 2</div>
<h1>ji</h1>
<h1>ji</h1>
<h1>ji</h1>

<h1>ji</h1>
<h1>ji</h1>
</div>
  );
}

export default Home1