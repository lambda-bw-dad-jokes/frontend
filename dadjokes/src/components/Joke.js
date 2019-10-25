import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  CardContainer,
  CardContainerJoke,
  CardContent,
  Emphasized,
  ButtonRow,
  PrivCheckbox,
  CheckboxLabel,
  
  FlexRow,
  Button,
  CardPunch,
  ShowPunch,
  CardId,
  DisplayJoke
} from "./StyledWidgets";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

import useDeleteJoke from "./hooks/useDeleteJoke";
import useEditJoke from "./hooks/useEditJoke";
import { FlagContext } from "../contexts/FlagContext";


const AddJoke = props => {
  const [editing, setEditing] = useState(false);
  const [joke, setJoke] = useState({
    setup: props.setup,
    punchline: props.punchline,
    id: props.id,
    isprivate: false
  });
  const [show, setShow] = useState(false);
  const [jokeid, setJokeid, handleDelete] = useDeleteJoke(joke.id);
  const [editJoke, setEditJoke, handleEdit] = useEditJoke(joke);
  const [flag, setFlag] = useContext(FlagContext);

  const handleChange = e => {
    setJoke({ ...joke, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("change made");
  }, [flag]);

  return (
    <DisplayJoke>
        <CardId>#{props.id}</CardId>
        <CardContent>{props.setup}</CardContent>
        {show ? (
          <CardPunch onClick={() => setShow(false)}>
            {props.punchline}
          </CardPunch>
        ) : (
          <ShowPunch onClick={() => setShow(true)}>Show Punchline</ShowPunch>
        )}
        <Emphasized>By: {props.user}</Emphasized>
      
      {localStorage.getItem("token") ? (
        <ButtonRow>
          {!editing ? (
            <Button
              onClick={e => {
                handleDelete(e.target.id);
                setFlag(!flag);
              }}
              id={joke.id}
            >
              Delete
            </Button>
          ) : (
            <></>
          )}
          <Button onClick={() => setEditing(!editing)}>
            {!editing ? "Edit" : "Cancel"}
          </Button>
        </ButtonRow>
      ) : (
        <></>
      )}
      {editing ? (
        <div>
        <CardContainerJoke>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleEdit(joke);
              setFlag(!flag);
            }}
            id={joke.id}
          >
            <FormControl
              type="text"
              name="setup"
              value={joke.setup}
              onChange={handleChange}
            />
            <FormControl
              type="text"
              name="punchline"
              value={joke.punchline}
              onChange={handleChange}
            />
            <FlexRow>
              <CheckboxLabel for="private">
                <PrivCheckbox type="checkbox" name="private" />
                Private
              </CheckboxLabel>
              <Button>save</Button>
            </FlexRow>
          </form>
          </CardContainerJoke>
        </div>
      ) : (
        <></>
      )}
    </DisplayJoke>
  );
};

export default AddJoke;
