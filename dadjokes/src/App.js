import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import Register from "./Components/Register";
import MenuBar from "./Components/MenuBar";
import Profile from "./Components/Profile";
import JokeList from "./Components/JokeList";
import Footer from "./Components/Footer";
import { JokeProvider } from "./contexts/JokeContext";
import { FlagProvider } from "./contexts/FlagContext";
import HomePage from "./Components/HomePage";
import PublicJokes from "./Components/PublicJokes";
import axios from "axios";
import { DataContext } from "./contexts/DataContext";

function App(props) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getFeed = () => {
      axios
        .get("https://mesofunny.herokuapp.com/api/v1/jokes")

        .then(response => {
          console.log(response.data.jokes);
          setData(response.data.jokes);
        })

        .catch(error => {
          console.log("Where are my jokes?", error);
        });
    };

    getFeed();
  }, []);

  const searchJokesHandler = e => {
    const jokes = data.filter(joke => {
      if (joke.title.includes(e.target.value)) {
        return joke;
      }
    });
    setFilteredData(jokes);
  };

  console.log("data", filteredData);

  return (
    <div className="App">
      <>
        <DataContext.Provider
          value={{ searchJokesHandler, data, filteredData }}
        >
          <JokeProvider>
            <FlagProvider>
              <Route path="/" component={MenuBar} />
              <Route exact path="/" component={HomePage} />
              <Route path="/jokes" component={JokeList} />
              <Route path="/profile" component={Profile} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={Register} />
              <Route path="/public-feed" component={PublicJokes} />
            </FlagProvider>
          </JokeProvider>
          <Route path="/" component={Footer} />
        </DataContext.Provider>
      </>
    </div>
  );
}

export default App;
