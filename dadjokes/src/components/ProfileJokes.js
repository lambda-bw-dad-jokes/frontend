import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Joke from "./Joke";
import AddJoke from "./AddJoke";
import { Link } from "react-router-dom";
import { UserJokeContext } from "../contexts/UserJokeContext";
import { UserContext } from "../contexts/UserContext";
import { FlagContext } from "../contexts/FlagContext";
import {
  ProfileJokeContainer,
  ScrollJokes,
  ProfileDiv,
  ProfileInfo,
  CardContainer
} from "./StyledWidgets";

const ProfileJokes = () => {
  const [jokes, setJokes] = useContext(UserJokeContext);
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [flag, setFlag] = useContext(FlagContext);

  return (
    <ProfileDiv>
      <ProfileInfo>
        <h2>{`Hello, ${currentUser}`}</h2>
        <CardContainer>
          <AddJoke />
        </CardContainer>
      </ProfileInfo>
      <ProfileJokeContainer>
        <ScrollJokes>
          {jokes.length === 0 ? (
            <div>
              <h3>You haven't created any jokes!</h3>
              <p>
                <em>Jokes you create will display here</em>
              </p>
            </div>
          ) : (
            jokes.map(joke => {
              return (
                <Joke
                id={joke.dadjokeid}
                key={joke.id}
                dadjokeanswer={joke.dadjokeanswer}
                dadjokequestion={joke.dadjokequestion}
                />
              );
            })
          )}
        </ScrollJokes>
      </ProfileJokeContainer>
    </ProfileDiv>
  );
};

export default ProfileJokes;
