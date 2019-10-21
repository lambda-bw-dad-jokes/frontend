import axios from "axios";

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axios
    .get(`https://icanhazdadjoke.com/api `)
    .then(response => {
        console.log(response.data)
        dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.jokes })
    })
    .catch(err => {
        dispatch({ type: err, payload:err })
    })
}