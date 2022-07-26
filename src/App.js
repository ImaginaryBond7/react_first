import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

function App() {

  const [todos, setTodo] = useState(["test 1", "test 2"]);
  function buttonClick(){
    setTodo((todos)=>{
      let item = document.getElementById("item-box").value

      return [...todos, item];
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {
          todos.map(singleTodo=> {
            return <p> {singleTodo} </p>
          })
          }
        </div>
        <input type="text" id="item-box"></input>
        <button onClick={buttonClick}> add item</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
