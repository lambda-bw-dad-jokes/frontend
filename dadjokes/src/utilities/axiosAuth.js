import axios from 'axios';

export const axioswithAuth=() =>{

    const token= localStorage.getItem('token');

    return axios.create({
        baseURL:'https://jwhit-dadjokes.herokuapp.com',
        'Content-type': 'application/json',
        headers:{
            'Authorization': token
        }
    });
};