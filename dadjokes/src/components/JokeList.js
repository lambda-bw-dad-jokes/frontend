import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Joke from "./Joke";
import AddJoke from "./AddJoke";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useInput } from "./hooks/useInput";
import { JokeContext } from "../contexts/JokeContext";
import { FlagContext, FlagProvider } from "../contexts/FlagContext";
import {
  Body,
  AddJokeMain,
  SearchInput,
  Button
} from "./StyledWidgets";

const JokeList = props => {
  const [jokes, setJokes] = useContext(JokeContext);
  const [flag, setFlag] = useContext(FlagContext);
  const [input, setInput, handleInput] = useInput("");
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    axios
      .get(`http://jwhit-dadjokes.herokuapp.com/dadjokes/public?size=1000&page=0&sort=dadjokeid,desc`)
      .then(response => {
        setDisplay(response.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, [jokes]);

  ///Search Functionality
  useEffect(() => {
    setDisplay(
      jokes.filter(joke =>
        joke.setup.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [flag]);

  const userLoggedIn = () => {
    return (
      <AddJokeMain>
        <AddJoke history={props.history} />
      </AddJokeMain>
    );
  };

  useEffect(() => {
    setDisplay(
      jokes.filter(joke =>
        joke.setup.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [flag]);

  const submitHandler = e => {
    e.preventDefault();
    setFlag(!flag);
  };
  ///

  return (
    <Body>
      <form onSubmit={e => submitHandler(e)}>
        <SearchInput
          onChange={e => handleInput(e.target.value)}
          value={input}
          placeholder="Search By Punchline"
        />
        <Button>Search</Button>
      </form>
      {localStorage.getItem("token") ? (
        userLoggedIn()
      ) : (
        <h2>Hi Hungry, I'm Dad</h2>
      )}

      {display.map(joke => {
        return (
          <FlagProvider>
            <Joke
              id={joke.dadjokeid}
              key={joke.id}
              dadjokeanswer={joke.dadjokeanswer}
              dadjokequestion={joke.dadjokequestion}
            />
          </FlagProvider>
        );
      })}
    </Body>
  );
};

export default JokeList;
