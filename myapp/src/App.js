import logo from './logo.svg';
import './App.css';
import Login from'./components/Login';
import Signup from './components/Signup';
import Register from './components/Register';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Statebasics from './components/Statebasics';

function App() {
  return (
    <div className="App">
     {/*h1<>hello</h1> */}
     {/* <Login/>
     {/*<Signup/> */}
     <Navbar/>
     <Routes>
    {/*<Route path='/reg'element={<Register/>}/>*/}
    <Route path='/u'element={<Statebasics/>}/>
    
    

    </Routes>
   
     
        
    </div>
  );
}

export default App;
