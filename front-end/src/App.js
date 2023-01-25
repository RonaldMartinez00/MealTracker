import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './views/login.js';
import CurrentUserProvider from './context/currentuser';
import Signup from './views/signup';
import Home from './views/home';
import GetMeals from './views/Tracker';
import Navbar from './views/navbar';
import Api from './views/api';

function App() {
  return (
    <CurrentUserProvider>
      <Routes> 
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/navbar' element={<Navbar/>}/>
        <Route exact path='/tracker' element={<Tracker/>}/>
        <Route exact path='/api' element={<Api/>}/>
      </Routes>
    </CurrentUserProvider>
  );
};


export default App;
