import logo from './logo.svg';
import './App.css';
import NavScrollExample from './components/navbar';
import Carousel_Home from './components/carousel_home';
import RaiseClaim from './components/raiseClaim';
import KYC_Form from './components/kycForm';
import Home from './components/home';
import Login from './components/login';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    {/* <Login/> */}
    {/* <KYC_Form/> */}
  
      <NavScrollExample/> 
     <Home/>
      
     
    </div>
  );
}

export default App;
