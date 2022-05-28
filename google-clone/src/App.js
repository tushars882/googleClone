import React from "react";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/Search" element={<Search/>}/> 
     </Routes>
   </Router>
  )
}

export default App;
