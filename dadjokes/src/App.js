import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MenuBar from './Components/MenuBar.js';
import { testingBackground } from './Components/StyledWidgets'
import PublicJokes from './Components/PublicJokes';
import Profile from "./Components/Profile";
import Jokes from "./Components/Jokes";
import { DataContext } from './contexts/DataContext'
import axios from 'axios'

function App(props) {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const getFeed= () => {
            axios 
                .get(" https://mesofunny.herokuapp.com/api/v1/jokes")

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
    <div style={testingBackground}>
        <>
        <DataContext.Provider value={{searchJokesHandler, data, filteredData}}>
        <Router>
        <Route path="/" component={MenuBar} />
            <Route exact path ='/' component={HomePage} />
            <Route path='/profile' component={Profile} />
            <Route path='/public-feed' component={PublicJokes} />
            <Route path="/jokes" component={Jokes} />
         </Router>
         </DataContext.Provider>
        </>
        </div>
  
  );
}

export default App;