import React from "react";
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

function App() {
  return (
    <div className="App">
      <JokeProvider>
        <FlagProvider>
          <Route path="/" component={MenuBar} />
          <Route exact path="/" component={HomePage} />
          <Route path="/jokes" component={JokeList} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={Register} />
        </FlagProvider>
      </JokeProvider>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
