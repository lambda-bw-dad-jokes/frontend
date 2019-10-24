import React from 'react';
import axios from "axios";
import { axioswithAuth } from '../utilities/axiosAuth';
import "../App.css";
import { useInput } from "./hooks/useInput";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoginBackground from '../DesignsElements/simpsons-wallpaper-hd.jpg';


const Login = props => {
    const [username, setUsername, handleUsername] = useInput();
    const [password, setPassword, handlePassword] = useInput();
  
    const handleSubmit = e => {
      e.preventDefault();
      axios
        .post(
          "https://api-dadjokes.herokuapp.com/login",
          `grant_type=password&username=${username}&password=${password}`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "Basic bGFtYmRhOmxhbWJkYS1zZWNyZXQ="
            }
          }
        )
        .then(res => {
          localStorage.setItem("token", res.data["access_token"]);
          props.history.push("/profile");
        })
        .catch(error => {
          console.log(error);
        });
    };
        return(
            <div className='body'>
                <Container className="p-5">
                    <div className="jumbotron" >
                        <div className="Login">
                            <form onSubmit={e => handleSubmit(e)}>
                                <h1>Welcome back!</h1>
                                <FormGroup controlId="username" bsSize="large">
                                <FormLabel>USERNAME</FormLabel>
                                    <FormControl
                                    autoFocus
                                    type='text'
                                    name='username'
                                    value={username}
                                    onChange={e => handleUsername(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup controlId="password" bsSize="large">
                                    <FormLabel>PASSWORD</FormLabel>
                                    <FormControl
                                    autoFocus
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={e => handlePassword(e.target.value)}
                                    />  
                                </FormGroup>
                                <Button block bsSize="large" variant="danger" onClick={e => handleSubmit(e)}> Log in </Button>
                                <p>Don't have an account yet? Register</p>
                        </form>
                    </div>
                 </div>
            </Container>
        </div>
        )
    }


export default Login