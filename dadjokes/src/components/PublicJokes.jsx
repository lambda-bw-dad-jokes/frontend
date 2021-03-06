import React, { useContext } from "react";
import PublicJokesContainer from "./PublicJokesContainer";
import HomePage from "./HomePage";
import { DataContext } from '../contexts/DataContext';
import { JokeListHeading } from './StyledWidgets';


// use public jokes api to get information for PublicJokeCard 
function PublicJokes () {
    const { data, filteredData } = useContext(DataContext)

    return (
        <div className="body">
            <div className="public-joke-feed">
                <h2 style={JokeListHeading}>Public Feed</h2>
                <PublicJokesContainer jokes={filteredData.length > 0 
                ? filteredData : data } />
            </div>
            
        </div>
    );

}

export default PublicJokes