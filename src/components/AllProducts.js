import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import CartFeature from './CartFeature'
import { useSelector } from 'react-redux';
const AllProducts = ({heading}) => {
    const allProductsReducer = useSelector(state=>state.products.product);
    const isLoadingAllProducts = new Array(5).fill(null)

    const categoryList =[...new Set(allProductsReducer.map((el)=>el.category))]
    categoryList[categoryList.length]="All";
console.log(categoryList)
    const [filterBy , setFilterBy]=useState("")
    const [defaultFilter,setDefaultFilter]=useState([])
  console.log("defult filter"+defaultFilter)
    const handleFilterProduct =(category)=>{
      if(category !== "All")setFilterBy(category)
      else setFilterBy("")
    }
    useEffect(()=>{
      const filter =filterBy ? allProductsReducer.filter((el)=>el.category.toLowerCase() === filterBy.toLowerCase()) : allProductsReducer
      console.log(filter)
      setDefaultFilter(()=>{
        return [
          ...filter
        ]
      })
  
    },[filterBy,allProductsReducer])
  return (
    <div className="">
    <h2 className="font-bold text-2xl mb-4 text-slate-800">
        {heading}
    </h2>
    <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
      {
        categoryList[0] && categoryList.map((el,index)=>{
          return (
            <FilterProduct
              key={index}
              category={el}
              onClick={() => handleFilterProduct(el)}
              isActive={el.toLowerCase()=== filterBy.toLowerCase()}
            />
          );
        })
      }
      
    </div>
     <div className="flex flex-wrap justify-center gap-2 my-4">
     {
        defaultFilter[0] ? defaultFilter.map((el)=>{
          return (
            <CartFeature
            key={el._id}
            image={el.productImage}
            name={el.name}
            price={el.price}
            category={el.category}
            id={el._id}
            
          />
          )
        }) :
       isLoadingAllProducts.map((el,index)=>{
        return <CartFeature key={index} isLoading="Loading..."/>
       })
      }
     </div>
    </div>
  )
}

export default AllProducts
