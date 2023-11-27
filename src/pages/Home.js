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
  const vegetableProductList = allProductsReducer.filter((el)=> el.category === "Vegetable",[])
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
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2 m-[-13px] mb-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://image.slidesdocs.com/responsive-images/background/illustrative-3d-render-featuring-a-phone-food-and-an-order-button-ideal-for-promoting-online-food-delivery-services-powerpoint-background_707bc4e388__960_540.jpg")' }}>
        <div className="md:w-1/2  justify-center items-center  px-2">
          <div className=" " >
          <div className="w-[11em] rounded-full justify-center flex gap-3  bg-pink-0  px-2 items-center">
            <p className="text-sm font-bold text-slate-900  ">Bike Delivery..</p>
            <span className="text-slate-900 ">
            <TbTruckDelivery className="h-8 w-10" />
            </span>
          </div>

          <h2 className="text-4xl font-bold md:text-6xl py-3">
            The Fastest Delivery in{" "}
            <span className="text-red-600 ">Your Home</span>
          </h2>
          <p className="text-sm md:font-xl my-1 md:my-10 max-w-lg font-semibold text-slate-900 bg-opacity-50 bg-pink-100 p-2 shadow-md">
          Welcome to Sagar e-shop – where delicious meets convenience! Experience the joy of having your favorite meals delivered right to your doorstep with just a few taps. Browse through a variety of cuisines and explore a world of culinary delights..
          </p>
          <button className="font-bold my-2 bg-red-500 hover:bg-red-400 rounded-md text-slate-100 px-3 py-1">
            Order Now
          </button>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-4 p-4 justify-center">
          {homeProductCardList[0]
            ? homeProductCardList.map((e) => {
                return (
                  <HomeCard
                    key={e._id}
                    id={e._id}
                    image={e.productImage}
                    name={e.name}
                    price={e.price}
                    category={e.category}
                  />
                );
              })
            : isLoadingHomeCard.map((el, index) => {
                return <HomeCard key={index} isLoading="Loading..." />;
              })}
        </div>
      </div>

      <div className="">
        <div className="flex ">
        <h2 className="font-bold text-2xl mb-4 text-slate-800">
          Fresh Vegetables
        </h2>
        <div className="ml-auto flex gap-2">
        <button onClick={()=>prevProduct()} className=" bg-slate-300 text-sm p-1"><GrPrevious /></button>
        <button onClick={()=>nextProduct()} className="bg-slate-300 text-sm px-1 py-[-20px]"><GrNext /></button>
        </div>
        </div>
        <div className="flex items-center ">
          <div className="flex   gap-3  overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef} >
         
            {vegetableProductList[0] ?
              vegetableProductList.map((el) => {
                return (
                  <CartFeature
                    key={el._id}
                    image={el.productImage}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                    id={el._id}
                    
                  />
                );
              }) :
              isLoadingVegCard.map((el,index)=>{
                return (
                  <CartFeature key={index} isLoading="Loading..." />
                )
              })
              }
  
          </div>
        </div>
      </div>
      <AllProducts heading="Your Products"/>
    </div>
  );
}

export default Home