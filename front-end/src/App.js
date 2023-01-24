import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './views/login.js';
import Tracker from './views/Tracker'
import CurrentUserProvider from './context/currentuser';
import Signup from './views/signup';

function App() {
  return (
    <CurrentUserProvider>
      <Routes> 
        <Route exact path='/' element={<Signup/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/tracker' element={<Tracker/>}/>
      </Routes>
    </CurrentUserProvider>
  );
};


export default App;
