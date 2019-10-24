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
            {/* <Menu.Item>
                <Input icon='search' placeholder='Search joke...' onKeyDown={props.search}/>
            </Menu.Item> */}
               
                   <Link to="/public-feed"><Image src={feed} className="button-home"/></Link>
              

            {/* <button className="button-home" onClick={() => <Link to="/public-feed"></Link> >Find a joke </button> */}
            {/* <button onClick={() => handleDelete(smurf.id)}>delete smurf</button>   */}

             
        </>
    );   
};

export default HomePageGrid; 