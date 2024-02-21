import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Landing from "./Views/Landing/Landing"; 
import Register from "./Views/Register/Register";
import Login from './Views/Login/Login';
import './App.css';

function App() { 
  return ( 
    <Router> 
      <Routes> 
        <Route path="" element={<Landing />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login/>}/>
      </Routes> 
    </Router> 
  ); 
}

export default App;