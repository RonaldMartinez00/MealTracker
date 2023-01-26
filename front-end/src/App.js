import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './views/login.js';
import CurrentUserProvider from './context/currentuser';
import Signup from './views/signup';
import Home from './views/home';
import Navbar from './views/navbar';
import Recipepage from './views/recipepage';

function App() {
  return (
    <CurrentUserProvider>
      <Routes> 
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/navbar' element={<Navbar/>}/>
        <Route exact path='/recipepage' element={<Recipepage/>}/>
      </Routes>
    </CurrentUserProvider>
  );
};


export default App;
