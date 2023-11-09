import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Router,Route, Outlet} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


function App() {
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
