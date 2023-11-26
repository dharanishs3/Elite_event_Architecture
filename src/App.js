import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route,Routes } from 'react-router-dom';

import Homepg from './Homepg/Homepg';
import Login from './Loginpg/Loginpg';
import Mainpg from './Main page/Mainpg';
import Signup from './Signup/Signup';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/' element={<Homepg/>}></Route>
            <Route path='/login/Main' element={<Mainpg/>}></Route>
            <Route path='/login/signup' element={<Signup/>}></Route>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
