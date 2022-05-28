import React from 'react'
import { FaSistrix, FaMicrophone } from "react-icons/fa";
// import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import {key,cxKey} from "../API.js"

function Home(props) {
  const [state,setState]=React.useState("");
  const navigate = useNavigate();
  const searchGoogle= async (e)=>{
      e.preventDefault();
      navigate(`/search`,{state:state})
  }
  return (
    
      <div className="home">
        <div className="home_container">
          <div className="home_logo">
            <img src="/images/google_logo.png" alt="Logo" />
          </div>
          <form className="home__form" onSubmit={searchGoogle}>
            <input type="text" className="home_input"  onChange={(e)=>setState(e.target.value)} value={state}/>
            <FaSistrix className='search_icon'/>
            <div className="home_group">
              <input type="submit" value="Google search" className="home_btn" />
            </div>
            <FaMicrophone className='microphone'/>
          </form>
        </div>
      </div>
    
  );
}

export default Home;