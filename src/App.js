
import './App.css';
import Header from './components/Header';
import {Router,Route, Outlet} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { allProductReducer} from './store/slices/ProductSlice'
import { useDispatch,useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const allProductsReducerRes = useSelector(state=>state.products)
     console.log(allProductsReducerRes)
  useEffect(()=>{
    (async()=>{
      const fetchData= await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/products`);
      const fetchRes=await fetchData.json();
      dispatch(allProductReducer(fetchRes.allProducts))
    })() 
  },[])
 

  return (
    
    <div className="App">
      <Toaster />
      <>
      <Header />
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)] '>
        <Outlet />
      </main>
      </>
    </div>
    
  );
}

export default App;
