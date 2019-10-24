// creates the square boxes that link to a given page using semantic-ui styling 

// imports 
import React from 'react';
import { Grid, Image, Input, Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom'

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
               
            <style type="text/css">
                {`
                .btn-flat {
                background-color: #4DAD93;
                color: white;
                }

                .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                }
                `}
            </style>

            <Button variant="flat" size="xxl"  className="button-home">
                Find a joke 
                    {!token ? <Link to="/user"></Link> : <Link to="/jokes"><Image src={book}/></Link>}
            </Button>             

             {/* PUBLIC FEED IS EMPTY IS IT NORMAL? */}

                {/* <Grid.Column>
                    <Link to="/public-feed"><Image src={feed} className="home-grid-img"/></Link>
                </Grid.Column> */}


                {/* <Grid.Column>
                    <Link to="/profile"><Image src={profile} className="home-grid-img"/></Link>
                </Grid.Column> */}
                </>
    );   
};

export default HomePageGrid; 