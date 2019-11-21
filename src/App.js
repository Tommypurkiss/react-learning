// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, {useState} from 'react';
import SecondHello from './sayHello';
import Tweet from './Tweet';

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    {name: 'Tommy', message: 'Hello'},
    {name: 'John', message: 'Hello there'}
  ]) 

  // const [user, setUser] = useState ({
  //   name: 'Tommy',
  //   age: '23',
  //   posts: ['My first post', 'My second post']
  // });

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }


  const sayHello = () => {
    console.log("hello");
  };
 
  return(
    <div className="app">
      <div className="div">
        <h1>Div one</h1>
        <h1>Hello React</h1>
        <p>This is not meant to look pretty at all.</p>

        <p>This is first hello from main file</p>
        <button onClick={sayHello} >Hello</button>

        <p>This is second hello from different file</p>
        <SecondHello />

        <h1 className={isRed ? 'red' : ''}>Change my colour</h1>
      </div>
      

      <div className="div">
        <h1>Div two</h1>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
      </div>

      <div className="div">
        <h1>Div three</h1>
        <div className="tweet-styling">

          {users.map(user => (
            <Tweet name={user.name} message={user.message}/>
          ))}
                
          {/* <Tweet name="John" message="random tweet one" likes="34"/>
          <Tweet name="John 2" message="random tweet two" likes="35"/>
          <Tweet name="John 3" message="random tweet three" likes="36"/>
          <Tweet name="John 4" message="random tweet four" likes="37"/> */}
        </div>
      </div>
      
      
      
    </div>
  );
}

export default App;
