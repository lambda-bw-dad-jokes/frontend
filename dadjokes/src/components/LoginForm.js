import React from 'react';
import { axioswithAuth } from '../utilities/axiosAuth';
import "../App.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import LoginBackground from '../DesignsElements/simpsons-wallpaper-hd.jpg';


class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password:''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axioswithAuth()
            .post('/login', this.state.credentials)
            .then(response => {
                localStorage.setItem('token', response.data.access_token );
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
                            <form onSubmit={this.login}>
                                <h1>Welcome back!</h1>
                                <FormGroup controlId="username" bsSize="large">
                                <FormLabel>USERNAME</FormLabel>
                                    <FormControl
                                    autoFocus
                                    type='text'
                                    name='username'
                                    value={this.state.credentials.username}
                                    onChange={this.handleChange}
                                    />
                                </FormGroup>
                                <FormGroup controlId="password" bsSize="large">
                                    <FormLabel>PASSWORD</FormLabel>
                                    <FormControl
                                    autoFocus
                                    type="password"
                                    name="password"
                                    value={this.state.credentials.password}
                                    onChange={this.handleChange}
                                    />  
                                </FormGroup>
                                <Button block bsSize="large" variant="danger" onClick={this.login}> Log in </Button>
                                <p>Don't have an account yet? Register</p>
                        </form>
                    </div>
                 </div>
            </Container>
        </div>
        )
    }
}

export default Login