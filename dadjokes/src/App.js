import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./Components/LoginForm";
import Register from "./Components/Register";
import MenuBar from "./Components/MenuBar";
import Profile from "./Components/Profile";
import JokeList from "./Components/JokeList";

import { Card } from "react-bootstrap";
import Footer from "./Components/Footer";
import { JokeProvider } from "./contexts/JokeContext";
import { FlagProvider } from "./contexts/FlagContext";
import HomePage from "./Components/HomePage";
import PublicJokes from "./Components/PublicJokes";
import axios from 'axios';
import { DataContext } from './contexts/DataContext'

function App() {

  return (
    <div className="App">
      <> 
      <JokeProvider>
        <FlagProvider>
          <Route path="/" component={MenuBar} />
          <Route path="/jokes" component={JokeList} />
          <Route path="/profile" component={Profile} />
        </FlagProvider>
      </JokeProvider>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={Register} />
      <Route path='/public-feed' component={PublicJokes} />
      <Card.Footer variant="dark" className="footer"> If YoU aRe ReAdInG tHiS, have a nice day !</Card.Footer>
      <Route path="/Footer" component={Footer} />
   
    </>
    </div>
  );
}

export default App;
