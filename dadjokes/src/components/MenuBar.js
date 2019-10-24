import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import { NavBarMenu, menuBarEmoji } from './StyledWidgets';
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import { Component } from 'react';
 
import styled from 'styled-components';


const StyledLink = styled(Link)`
    padding-right: 30px;
    color:white;

    &:hover {
        text-decoration:none;
        color:#4DAD93;
    }
`;



 const MenuBar = (props) => {
    const token = localStorage.getItem('token')

     const logout = () => {
        localStorage.removeItem('token')
        props.history.push('/')
    }
    console.log('props', props)
    if (token) {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>DAD JOKES</Navbar.Brand>
                    <Nav className="mr-auto">
                    <StyledLink to="/jokes"> Jokes </StyledLink>
                    <StyledLink to="/">
                    {localStorage.getItem("token") ? "Home" : "Log In"}
                    </StyledLink>
                    <StyledLink to="/register"> Register</StyledLink>
                    <StyledLink to="/login"> Login</StyledLink>
                    <StyledLink onClick={logout}> Logout</StyledLink>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    } else {

        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>DAD JOKES</Navbar.Brand>
                    <Nav className="mr-auto">
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/jokes"> Jokes </StyledLink>
                    <StyledLink to="/login"> Login</StyledLink>
                    <StyledLink onClick={logout}> Logout</StyledLink>
                    <StyledLink to="/register"> Register</StyledLink>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}
export default MenuBar;