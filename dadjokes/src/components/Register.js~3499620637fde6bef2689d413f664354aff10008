import React from 'react';
import { axioswithAuth } from '../utilities/axiosAuth';
import "../App.css";

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
        <div className="Login">
        <form onSubmit={this.register}>
            <input
            type='text'
            name='username'
            placeholder='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
            />
            <input
            type="password"
            name="password"
            placeholder='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}


            />

            <input
            type="text"
            name="primaryemail"
            placeholder="email"
            value={this.state.credentials.primaryemail}
            onChange={this.handleChange}
            />
            <button onClick={this.register}> Register </button>
        </form>
        </div>
        )
    }
}

export default Register