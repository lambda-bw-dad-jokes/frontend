import React from 'react';
import { axioswithAuth } from '../utilities/axiosAuth';
import "../App.css";
import axios from "axios";
import { useInput } from "./hooks/useInput";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoginBackground from '../DesignsElements/simpsons-wallpaper-hd.jpg';


const Register = props => {
    const [username, setUsername, handleUsername] = useInput("");
    const [password, setPassword, handlePassword] = useInput("");
    const [confirm, setConfirm, handleConfirm] = useInput("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (password === confirm) {
        axios
          .post(
            "https://api-dadjokes.herokuapp.com/createnewuser",
            JSON.stringify({ username, password }),
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          )
          .then(res => {
            console.log(res);
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
              .catch(err => {
                console.log(err);
              });
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        alert("Passwords must match.");
      }
    };
    
        return(
            <div className='body'>
            <Container className="p-5">
                <div className="jumbotron" >
                    <div className="Login">
                      <form onSubmit={e => handleSubmit(e)}>
                          <h1> Welcome to DAD JOKES </h1>
                          <h5> The place to get your daily dose of healthy laugh </h5><br/>
                            <FormGroup controlId="username" bsSize="large">
                            <FormLabel>USERNAME</FormLabel>
                                <FormControl
                                    autoFocus
                                    type='text'
                                    name='username'
                                    placeholder='username'
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
                                        placeholder='password'
                                        value={password}
                                        onChange={e => handlePassword(e.target.value)}
                                    /> 
                                    <FormControl
                                        autoFocus
                                        className="default"
                                        type="password"
                                        placeholder="confirm password"
                                        name="confirm"
                                        onChange={e => handleConfirm(e.target.value)}
                                        value={confirm}
                                        /> 
                                    </FormGroup>
                                    <Button block bsSize="large" variant="danger" onClick={e => handleSubmit(e)}> Register </Button>
                                <p>Already have an account ? Just sign up!</p>
                                </form>
                    </div>
                 </div>
            </Container>
        </div>
        )
    }


export default Register