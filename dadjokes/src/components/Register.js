import React from 'react';
import { axioswithAuth } from '../utilities/axiosAuth';
import "../App.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoginBackground from '../DesignsElements/simpsons-wallpaper-hd.jpg';


class Register extends React.Component {
    state = {
        credentials: {
            username: '',
            password:'',
            primaryemail:''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.credentials)
    };

    register = e => {
        e.preventDefault();
        axioswithAuth()
            .post('/createnewuser', this.state.credentials)
            .then(response => {
                console.log(response)
                this.props.history.push('/jokes');
            })
            .catch(error => console.log(error));
    };

    render(){
        return(
            <div className='body'>
            <Container className="p-5">
                <div className="jumbotron" >
                    <div className="Login">
                      <form onSubmit={this.register}>
                          <h1> Welcome to DAD JOKES </h1>
                          <h5> The place to get your daily dose of healthy laught </h5><br/>
                            <FormGroup controlId="username" bsSize="large">
                            <FormLabel>USERNAME</FormLabel>
                                <FormControl
                                    autoFocus
                                    type='text'
                                    name='username'
                                    placeholder='username'
                                    value={this.state.credentials.username}
                                    onChange={this.handleChange}
                                    />
                                    </FormGroup>
                                    <FormGroup controlId="email" bsSize="large">
                                    <FormLabel>EMAIL</FormLabel>
                                    <FormControl
                                    autoFocus
                                    type="text"
                                    name="primaryemail"
                                    placeholder="email"
                                    value={this.state.credentials.primaryemail}
                                    onChange={this.handleChange}
                                    />  
                                    </FormGroup>
                                    <FormGroup controlId="password" bsSize="large">
                                    <FormLabel>PASSWORD</FormLabel>
                                    <FormControl
                                    autoFocus
                                    type="password"
                                    name="password"
                                    placeholder='password'
                                    value={this.state.credentials.password}
                                    onChange={this.handleChange}
                                    />  
                                    </FormGroup>
                                    <Button block bsSize="large" variant="danger" onClick={this.register}> Register </Button>
                                <p>Already have an account ? Just sign up!</p>
                                </form>
                    </div>
                 </div>
            </Container>
        </div>
        )
    }
}

export default Register