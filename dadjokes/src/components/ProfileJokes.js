import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Joke from "./Joke";
import AddJoke from "./AddJoke";
import { UserJokeContext } from "../contexts/UserJokeContext";
import { UserContext } from "../contexts/UserContext";
import { FlagContext } from "../contexts/FlagContext";
import Homer from '../DesignsElements/homer.jpg';
import {
  ProfileJokeContainer,
  ScrollJokes,
  ProfileDiv,
  ProfileInfo,
  CardContainer
} from "./StyledWidgets";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


const ProfileJokes = () => {
  const [jokes, setJokes] = useContext(UserJokeContext);
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [flag, setFlag] = useContext(FlagContext);

  return (
    <ProfileDiv>
      <ProfileInfo>
        <CardContainer>
        <h2>{`Hello, ${currentUser}`}</h2>
          <AddJoke>
          </AddJoke>
           
        </CardContainer>
      <ProfileJokeContainer>
        <ScrollJokes>
          {jokes.length === 0 ? (
            <CardContainer> 
            <div>
              <h3>You haven't created any jokes!</h3>
              <p>
                <em>Jokes you create will display here</em>
              </p>
            </div>
             </CardContainer>
          ) : (
            jokes.map(joke => {
              return (
                <Joke
                  id={joke.id}
                  key={joke.id}
                  setup={joke.setup}
                  punchline={joke.punchline}
                  user={currentUser}
                />
              );
            })
          )}
        </ScrollJokes>
      </ProfileJokeContainer>
      </ProfileInfo>
    </ProfileDiv>
  );
};

export default ProfileJokes;
