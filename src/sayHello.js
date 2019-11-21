import React from 'react';

// Function must start with a capital letter otherwise App.js doesnt find it
function SecondHello() {

    const sayHelloTwo = () => {
        console.log("hello two");
      };
    

    return(
        <div>
            <button onClick={sayHelloTwo}>Hello number two</button>
        </div>
    );
}

export default SecondHello;
