import React, { useState } from "react";
import { connect } from 'react-redux'
import { fetchData, addData, deleteData, editData } from '../store/actions'


function JokeCard (props) {
 const [jokeState, setJokeState] = useState({
    title: "",
    joke: "",
    status: ''
  });

  const changeHandler = event => {
    setJokeState({
      ...jokeState,
      [event.target.name]: event.target.value
    });
  };

  const editJoke = e => {
    e.preventDefault()
    props.editData(props.joke.id, jokeState)
    setJokeState({
      title: '',
      joke: '',
      status: ''
    })
  }

  console.log(props.jokes.id)

  return (
    <div definition className="Table">
          <div>{props.joke.title}</div>
          <div>{props.joke.joke}</div>
          <input 
          type="text" 
          placeholder="public or private" 
          name="status" 
          value={jokeState.status} 
          onChange={changeHandler}
          />
            <button>Edit</button>
              <form>
                <input 
                      type="text"
                      placeholder="title"
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
                      placeholder="public or private"
                      name="status"
                      value={jokeState.status}
                      onChange={changeHandler}
                      />
                      

                    <button  onClick={editJoke}>
                      Update Joke
                    </button>
                </form>
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
    { fetchData, addData, deleteData, editData }
)(JokeCard)
