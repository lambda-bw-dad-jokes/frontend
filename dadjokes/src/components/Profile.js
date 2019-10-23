import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProfileJokes from "./ProfileJokes";
import { Body, ProfileBackground } from "./StyledWidgets";
import { UserProvider } from "../contexts/UserContext";
import { UserJokeProvider } from "../contexts/UserJokeContext";
import { FlagProvider } from "../contexts/FlagContext";

const Profile = props => {
  return (
    <ProfileBackground>
      <UserJokeProvider>
        <UserProvider>
          <FlagProvider>
            <ProfileJokes />
          </FlagProvider>
        </UserProvider>
      </UserJokeProvider>
    </ProfileBackground>
  );
};

export default Profile;
