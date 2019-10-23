import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  PageHeader,
  Button,
  PrivCheckbox,
  EnterJoke,
  CheckboxLabel
} from "./StyledWidgets";

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
      <PageHeader>Add Joke</PageHeader>
      <form onSubmit={SubmitJoke}>
        <EnterJoke
          type="text"
          name="setup"
          placeholder="Dadjoke"
          value={setup}
          onChange={e => setupHandler(e.target.value)}
        />
        <EnterJoke
          type="text"
          name="Dadjoke"
          placeholder="Question"
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
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default AddJoke;
