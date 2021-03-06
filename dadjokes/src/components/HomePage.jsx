// Code for home page and joke of the day 

// imports 
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import '../homepage.css'; 
import HomePageGrid from "./HomePageGrid";
import dad from "../Components/images/dad-quote.jpg"; 
import { DataContext } from '../contexts/DataContext';

import HomeBackground from '../DesignsElements/homeImg.png';


const HomePage = (props) => {

    // store joke of the day using hooks 
    const [joke, setJoke] = useState("")
    // const { searchJokesHandler } = useContext(DataContext)
    
    // use api to get joke of the day 
    useEffect(() => {
    
        const getJoke = () => {
            axios
            .get("https://mesofunny.herokuapp.com/api/v1/jokesOfTheDay")

            .then(response => {
                // successful 
                console.log("response data", response); 

                setJoke(response.data.joke.joke);
            })

            .catch(error => {
                // unsuccessful
                console.error("The API is currently down.", error);
            });
        }
      
        getJoke();

    }, []);
    
    return (
      <div className="Home" style={{backgroundImage: `url(${HomeBackground})`}}>
            <HomePageGrid />
      </div>
    );
  }

  
export default HomePage;