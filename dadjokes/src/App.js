import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'; kiyani-bamba
import Jokes from "./Components/Jokes";
import axios from 'axios'
import LoginForm from './Components/LoginForm';
import Register from './Components/Register'


function App(props) {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const getFeed= () => {
            axios 
                .get("http://jwhit-dadjokes.herokuapp.com/dadjokes/all?size=1000&page=0&sort=dadjokeid,desc")

                .then(response => {
                    console.log(response.data.jokes)
                    setData(response.data.jokes)
                })

                .catch(error => {
                console.log("Where are my jokes?", error)
                });
        }

        getFeed();
  }, [])

const searchJokesHandler = e => {
  const jokes = data.filter(joke => {
    if (joke.title.includes(e.target.value)) {
      return joke
    }
  })
  setFilteredData(jokes)
}

  console.log('data', filteredData)

  return (

        <div>
        <Router>
            <Route path="/jokes" component={Jokes} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={Register} />
         </Router>
        </div>

       
  );
}

export default App;