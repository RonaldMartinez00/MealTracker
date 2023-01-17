import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Tracker from './views/Tracker'

function App() {
  return (

  <Routes> 
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/tracker' element={<Tracker/>}/>
  </Routes>
    
  );
}

export default App;
