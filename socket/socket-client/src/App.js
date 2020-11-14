import { useState, useEffect } from 'react'
import './App.css'
import io from 'socket.io-client'

const socket = io('localhost:5000')
const presenter = '동해물과백두산이'

function App() {
  const [ username, setUsername ] = useState('')
  const [ typeAt, setTypeAt ] = useState();
  const [ nowAt, setNowAt ] = useState();
  const [ timer, setTimer ] = useState();
  const [ started, setStarted ] = useState(false)
  const [ userType, setUserType ] = useState(false)
  const [ message, setMessage ] = useState('')
  const [ messages, setMessages ] = useState([])

  socket.on('msg', (msg) => {
    const newData = [...messages, msg]
    setMessages(newData)
  })

  const onUsernameChange = (event) => {
    setUsername(event.currentTarget.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if(message !== presenter){
      alert('땡!')
    } else {
      socket.emit('msg', {
        username,
        message,
        time: timer/1000 + '초'
      })
      setMessage('')
      setUserType(false)
    }
  }
  const onChange = (event) => {
    if(event.currentTarget.value.length > 0){
      if(!userType){
        setTypeAt(new Date().getTime())
        setUserType(true)
      }
      setNowAt(new Date().getTime())
      setTimer(
        nowAt - typeAt
      )
    }
    setMessage(event.currentTarget.value);
  }
  const startGame = () => {
    if(username !== ''){
      setStarted(true)
    } else {
      alert('이름을 입력하세요')
    }
  }

  return (
    <>
      {started ?
        <>
          <h1>제시어: 동해물과백두산이</h1>
          <ul id="messages">
            {messages.map((msg, i) => (
              <li key={i}>{msg.username + ' / ' + msg.message + ' / ' + msg.time}</li>
            ))}
          </ul>
          <form onSubmit={onSubmit}>
            <input id="m" autoComplete="off" value={message} onChange={onChange} autoFocus /><button onClick={onSubmit}>Send</button>
          </form>
        </>
      : <>
          <input type="text" value={username} onChange={onUsernameChange}
            style={{ width: '20%', height: '50px', display: 'block', margin: 'auto' }}
            placeholder="이름을 입력하세요"
          />
          <button
            onClick={startGame} 
            style={{ width: '20%', height: '50px', display: 'block', margin: 'auto' }}      
          >
            게임시작
          </button>
        </>
      }
    </>
  );
}

export default App;
