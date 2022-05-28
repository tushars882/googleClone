import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import { useState } from "react";
import Home from "./Home";
import { key, cxKey } from "../API";
import axios from "axios";
import Show from "./Show";

export const Search = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  // on clicking over google image redireted to "/"
  const goBack = (e) => {
    e.preventDefault();
    navigate(`/`);
  };

  const [state, setState] = useState(location.state);
  //here we have checked that if the state exists then print state from that location else empty string
  // console.log(state);

  const [results, setResults] = React.useState([]);
  const [info, setInfo] = React.useState("");
  const searchGoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cxKey}&q=${location.state}`
      );
      if (response) {
        console.log(response.data.items, response.data.searchInformation);
        setResults(response.data.items);
        setInfo(response.data.searchInformation);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
     async function getPosts() {
      if (location.state) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cxKey}&q=${location.state}`
          );
          if (response) {
            console.log(response.data.items, response.data.searchInformation);
            setResults(response.data.items);
            setInfo(response.data.searchInformation);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getPosts();
  }, []); //we need to pass an empty array as it will refresh the component againg and again

  return (
    <div className="search">
      <div className="search_form">
        <div className="search_form_logo">
          <img src="./images/logo4.png" alt="logo" onClick={goBack} />
        </div>
        <div className="search_form_input">
          <form className="home__form" onSubmit={searchGoogle}>
            <input
              type="text"
              className="home_input_2"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <FaSistrix className="search_page_icon"></FaSistrix>
            <FaMicrophone className="find_page_icon"></FaMicrophone>
          </form>
        </div>
      </div>
      <Show results={results} info={info} />
    </div>
  );
};

export default Search;
