import react, { useState } from 'react'
import './App.css';
import io from "socket.io-client";

function App() {
  const [ message, setMessage ] = useState('');
  const socket = io.connect('localhost:5000');
  const onChange = (event) => {
    setMessage(event.currentTarget.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(message)
    setMessage('')
  }
  
  return (
    <>
      <ul id="messages"></ul>
      <form onSubmit={onSubmit}>
        <input id="m" autoComplete="off" value={message} onChange={onChange} /><button onClick={onSubmit}>Send</button>
      </form>
    </>
  );
}

export default App;
