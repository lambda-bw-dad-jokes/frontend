import React from 'react';
import { axioswithAuth } from '../utilities/axiosAuth';
import "../App.css";

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
        <div className="Login">
        <form onSubmit={this.login}>
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
            <button onClick={this.login}> Log in </button>
        </form>
        </div>
        )
    }
}

export default Login