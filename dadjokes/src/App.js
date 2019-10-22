import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Jokes from "./Components/Jokes";
import axios from 'axios'
import HomePage from './Components/HomePage';
import Profile from "./Components/Profile";
import PublicJokes from './Components/PublicJokes';



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
        <>
        <Router>
            <Route exact path ='/' component={HomePage} />
            <Route path='/profile' component={Profile} />
            <Route path='/public-feed' component={PublicJokes} />
            <Route path="/jokes" component={Jokes} />
         </Router>
        </>
    // <div className="App">
    //   <h1> dad jokess </h1>
    // </div>
  );
}

export default App;