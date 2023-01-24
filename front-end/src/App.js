import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './views/login.js';
import Tracker from './views/Tracker'
import CurrentUserProvider from './context/currentuser';


function App() {
  return (
    <CurrentUserProvider>
      <Routes> 
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/tracker' element={<Tracker/>}/>
      </Routes>
    </CurrentUserProvider>
  );
};


export default App;
