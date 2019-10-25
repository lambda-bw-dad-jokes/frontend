// creates the square boxes that link to a given page using semantic-ui styling 

// imports 
import React from 'react';
import { Grid, Image, Input, Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import PublicJokes from './PublicJokes';

import { Button } from "react-bootstrap";
//image imports
import book from "./images/joke-book.png"; 
import feed from "./images/public-feed.png";
import profile from "./images/profile.png";  


const HomePageGrid = (props) => {
    const token = localStorage.getItem('token')
    return (
        <>
        <Link to="/jokes" >
        <button className="button-home"> 
            Find a joke 
        </button>
        </Link>  
        </>
    );   
};

export default HomePageGrid; 