import { useState } from 'react'
import './App.css'
import io from 'socket.io-client'

const socket = io('localhost:5000')
const presenter = '동해물과백두산이'

function App() {
  const [ time, setTime ] = useState(0);
  const [ started, setStarted ] = useState(false)
  const [ message, setMessage ] = useState('')
  const [ messages, setMessages ] = useState([])

  socket.on('msg', (msg) => {
    setMessages([...messages, msg])
  })

  const onSubmit = (e) => {
    e.preventDefault()
    if(message !== presenter){
      alert('땡!')
    } else {
      socket.emit('msg', message)
      setMessage('')
    }
  }
  const onChange = (event) => {
    setMessage(event.currentTarget.value);
  }
  const startGame = () => {
    setStarted(true)
  }
  const timerView = () => {
    return time
  }
  return (
    <>
      {started ?
        <>
          <h1>제시어: 동해물과백두산이</h1>
          <h2>{timerView()}</h2>
          <ul id="messages">
            {messages.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
          <form onSubmit={onSubmit}>
            <input id="m" autoComplete="off" value={message} onChange={onChange} autoFocus /><button onClick={onSubmit}>Send</button>
          </form>
        </>
      : <button
          onClick={startGame} 
          style={{ width: '20%', height: '50px', display: 'block', margin: 'auto' }}      
        >
        게임시작
        </button>
      }
    </>
  );
}

export default App;
