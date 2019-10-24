import React, { useState, useEffect } from "react";
import axios from "axios";
import { axioswithAuth } from '../utilities/axiosAuth';
import {
  PrivCheckbox,
  CheckboxLabel
} from "./StyledWidgets";
import "../App.css";
import Container from "react-bootstrap/Container";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Login from './LoginForm';
import { useInput } from "./hooks/useInput";

const AddJoke = props => {
  const [setup, setSetup, setupHandler] = useInput("");
  const [dadjokequestion, setdadjokequestion, dadjokequestionHandler] = useInput("");
  const [isprivate, setIsprivate] = useState(false);

  const SubmitJoke = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(
        "https://jwhit-dadjokes.herokuapp.com/dadjokes/add",
        JSON.stringify({
          setup: setup,
          dadjokequestion: dadjokequestion,
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
        setdadjokequestion("");
        window.location.href = window.location.href;
      });
  };



  const checkboxChanged = e => {
    e.target.checked ? setIsprivate(true) : setIsprivate(false);
  };

  return (
    <div>
      <Container className="p-5">
      <h2>Hey,</h2>
        <p> Share your best jokes with us below! You can decide to put them private so only register users can read them.</p><br/>
      <form onSubmit={SubmitJoke}>
      <FormLabel>JOKES</FormLabel>
        <FormControl
          type="text"
          name="setup"
          value={setup}
          onChange={e => setupHandler(e.target.value)}
        />
        <FormLabel> PUNCHLINE </FormLabel> 
        <FormControl
          type="text"
          name="Dadjoke"
          value={dadjokequestion}
          onChange={e => dadjokequestionHandler(e.target.value)}
        />
        <CheckboxLabel for="private">
          <PrivCheckbox
            type="checkbox"
            name="private"
            onChange={e => checkboxChanged(e)}
          />
          Private
        </CheckboxLabel>
        <Button block bsSize="large" variant="danger"> See my joke </Button>
      </form>
      
      </Container>
    </div>
  );
};

export default AddJoke;
