import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Joke from "./Joke";
import AddJoke from "./AddJoke";
import { Link } from "react-router-dom";
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
          <AddJoke />
        </CardContainer>
      {/* <ProfileJokeContainer> */}
      </ProfileInfo>
      
      {/* </ProfileJokeContainer> */}
    </ProfileDiv>
  );
};

export default ProfileJokes;
