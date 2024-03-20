
import './App.css';

import Header from './components/Header';
import {Router,Route, Outlet} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { allProductReducer} from './store/slices/ProductSlice'
import { useDispatch,useSelector } from 'react-redux';

import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Home1 from './pages/Home1';
import HomeCard from './components/HomeCard';
import Sidebar from './components/Sidebar';
import Cart from './components/Cart';



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


    
  const user = useSelector((state)=>state.users.user)
  const isSignUp = useSelector((state)=>state.routers.allRouters.isSignup)
console.log(user)

 

  return (
    
    <div className="App  bg-slate-100 min-h-[calc(100vh)]">
    <Toaster />
      {/* <>
      <div className='bg-custom-bg bg-cover bg-center h-screen'> */}
      {/* {!user.user ?   <>
      
      <Navbar />
      <main className=' pt-16 bg-slate-100 min-h-[calc(100vh)]'>
    
       <Outlet />
            
          </main>
          </> :
          
          !isSignUp ? 
        
          <Login /> : <Signup />
           }
          </div>
        
          </> */}

          {user._id ? 
          <>
            <Navbar /> 
            <main className='pt-11 md:pt-[4.3%] flex bg-slate-100 min-h-[calc(100vh)] '>
            <Sidebar />
        <Outlet />
         </main>
 
            
          
          
            </> :
               <>
               
               <div className='bg-custom-bg bg-cover bg-center h-screen'>{
            !isSignUp ? 
     
            <Login /> : <Signup />
          }
          </div>
            </>
}
</div>
         
    
  );
}

export default App;
