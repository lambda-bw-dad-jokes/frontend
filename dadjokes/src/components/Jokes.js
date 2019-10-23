import React, { useState } from "react";
import { connect } from 'react-redux';
// import { fetchData, addData, deleteData, editData } from '../store/actions';
import JokeList from './JokeList';

function Jokes (props) {
  const [jokeState, setJokeState] = useState({
    title: "",
    joke: "",
    status1: 'yes'
  });

  const changeHandler = event => {
    setJokeState({
      ...jokeState,
      [event.target.name]: event.target.value
    });
  };

  const addJoke = (e) => {
        e.preventDefault()
        props.addData(jokeState)
        setJokeState({
            title: '',
            joke: '',
            status: ''
        })
    }
  
  return (

    <div>
      <h2>My Joke Book</h2>
      <div>
        <h1>Title</h1>
        <h1>Preview</h1>
        <h1>Actions</h1>
        <h1>Public</h1>
        </div>
        <form>
          <input 
            type="text"
            placeholder="Title"
            name="title"
            value={jokeState.title}
            onChange={changeHandler}
          />
          <input
            type="text"
            placeholder="ENTER JOKE HERE"
            name="joke"
            value={jokeState.joke}
            onChange={changeHandler}
          />
          
          <input
            type="text"
            placeholder="public(no) or private(yes)"
            name="status"
            value={jokeState.status}
            onChange={changeHandler}
          />
          
          <button className="add-fun" onClick={addJoke}>
            Add your own fun!
          </button>

        </form>
        <JokeList />
    </div>
  );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        error: state.error,
        isFetching: state.isFetching,
        jokes: state.jokes,
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    // { fetchData, addData, deleteData, editData }
)(Jokes)

