import React, { useState, createContext, useEffect } from "react";
import JokeList from "../Components/JokeList";
import Joke from "../Components/Joke";
import Profile from "../Components/Profile";
import ProfileJokes from "../Components/ProfileJokes";

export const FlagContext = createContext();

export const FlagProvider = props => {
  const [flag, setFlag] = useState("");

  useEffect(() => {
    setFlag(false);
  }, []);

  return (
    <FlagContext.Provider value={[flag, setFlag]}>
      {props.children}
    </FlagContext.Provider>
  );
};
