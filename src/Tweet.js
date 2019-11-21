import React from 'react';
import './App.css'

function Tweet(props) {
    // {name, message, likes} - rather than props
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            {/* name - rather than props.name */}
            <p>{props.message}</p>
            {/* message - rather than props.message */}
            <h3>{props.likes}</h3>
            {/* likes - rather than props.likes */}

        </div>
    );
}

export default Tweet;