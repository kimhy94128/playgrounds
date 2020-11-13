import { useState } from 'react'
import './App.css'
import io from 'socket.io-client'

const socket = io('localhost:5000')
function App() {
  const [ message, setMessage ] = useState('')
  const [ messages, setMessages ] = useState([])

  socket.on('msg', (msg) => {
    setMessages([...messages, msg])
  })

  const onSubmit = (e) => {
    e.preventDefault()
    socket.emit('msg', message)
    setMessage('')
  }
  const onChange = (event) => {
    setMessage(event.currentTarget.value);
  }
  return (
    <>
      <ul id="messages">
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input id="m" autoComplete="off" value={message} onChange={onChange} /><button onClick={onSubmit}>Send</button>
      </form>
    </>
  );
}

export default App;
