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
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/profile"> Profile</StyledLink>
                    <StyledLink to="/login"> Login</StyledLink>
                    <StyledLink to="/logout"> Logout</StyledLink>
                    <StyledLink to="/register"> Register</StyledLink>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                    </Form>
                    
                    {/* <Dropdown item icon='bars' simple>
                        <Dropdown.Menu>
                            <div>
                            <Link to='/' >
                                <Dropdown.Item className="nav">Home</Dropdown.Item>
                            </Link>
                            </div>
                            <div>
                            <Link to='/contact' >
                                <Dropdown.Item className="nav">Contact Us</Dropdown.Item>
                            </Link>
                            </div>
                            <div>
                            <Link to ='/profile'>
                                <Dropdown.Item className="nav">Profile</Dropdown.Item>
                            </Link>
                            </div>
                            <div>
                            <Link to ='/login'>
                                <Dropdown.Item className="nav">Login</Dropdown.Item>
                            </Link>
                            </div>
                            <div>
                            <Link to ='/register'>
                                <Dropdown.Item className="nav">Register</Dropdown.Item>
                            </Link>
                            </div>
                            <div>
                                <Dropdown.Item onClick={logout} className="nav">Logout</Dropdown.Item>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Menu position='left' >
                    
                    </Menu.Menu> 
                 */}
                </Navbar>
            </div>
        )
    } else {

        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">DAD JOKES</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    
                    <Link to="/profile"> Profil</Link>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                    <Nav.Link href="#pricing">Register</Nav.Link>
                    <Nav.Link href="#pricing">Logout</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                    </Form>
                    
                    {/* <Dropdown item icon='bars' simple>
                        <Dropdown.Menu>
                            <div>
                            <Link to='/' >
                                <Dropdown.Item>Home</Dropdown.Item>
                            </Link>
                            </div>
                            <div>
                            <Link to ='/login'>
                                <Dropdown.Item>Login</Dropdown.Item>
                            </Link>
                            </div>
                            <div>
                            <Link to ='/register'>
                                <Dropdown.Item>Register</Dropdown.Item>
                            </Link>
                            </div>
                            <div>
                            <Link to ='/public-feed'>
                                <Dropdown.Item>Public Feed</Dropdown.Item>
                            </Link>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
 */}
                </Navbar>
            </div>
        )
    }
}
export default MenuBar;