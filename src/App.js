import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {Router,Route, Outlet} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <main className='pt-16'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
