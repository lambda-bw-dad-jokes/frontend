import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PrivCheckbox,
  EnterJoke,
  CheckboxLabel
} from "./StyledWidgets";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../App.css";
import { useInput } from "./hooks/useInput";

const AddJoke = props => {
  const [setup, setSetup, setupHandler] = useInput("");
  const [punchline, setPunchline, punchlineHandler] = useInput("");
  const [isprivate, setIsprivate] = useState(false);

  const SubmitJoke = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(
        "https://api-dadjokes.herokuapp.com/jokes/auth/create",
        JSON.stringify({
          setup: setup,
          punchline: punchline,
          isprivate: isprivate
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
          }
        }
      )
      .then(() => {
        setSetup("");
        setPunchline("");
        window.location.href = window.location.href;
      });
  };

  const checkboxChanged = e => {
    e.target.checked ? setIsprivate(true) : setIsprivate(false);
  };

  return (
    <div>
      <Container >
        <form onSubmit={SubmitJoke}>
          <h2>Add joke</h2>
          <p>Share your favorites jokes with us below! You can set them in private so only registers users will be able to read them.</p>
          <FormLabel>JOKE</FormLabel>
          <FormControl
            autoFocus
            type="text"
            name="setup"
            value={setup}
            onChange={e => setupHandler(e.target.value)}
            />
          <FormLabel>PUNCHLINE</FormLabel>
          <FormControl
            type="text"
            name="punchline"
            value={punchline}
            onChange={e => punchlineHandler(e.target.value)}
            />
          <CheckboxLabel for="private">
            <PrivCheckbox
              type="checkbox"
              name="private"
              onChange={e => checkboxChanged(e)}
              />
            Private
          </CheckboxLabel>
          <Button block bsSize="large" variant="danger" type="submit">Save</Button>
        </form> 
      </Container>
    </div>
  );
};

export default AddJoke;
