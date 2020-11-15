import { useState, useRef, useEffect } from 'react'
import io from 'socket.io-client'

const socket = io('localhost:5000')

function Chat() {
  const [ inputMessage, setInputMessage ] = useState('')
  const [ messages, setMessages ] = useState([])

  const scrollRef = useRef()
  
  // useEffect(() => {
  //   scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  // }, [messages])
  
  socket.on('from-them', (msg) => {
    msg = {
      from: msg.from,
      message: msg.message
    }
    setMessages([...messages, msg])
  })

  const onChange = ({currentTarget : { value }} ) => {
    setInputMessage(value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if(inputMessage.length > 0){
      socket.emit('from-me', {
        from: 'from-me',
        message: inputMessage
      })
      setMessages([...messages, {
        from: 'from-me',
        message: inputMessage
      } ])
    }
    setInputMessage('')
  }
  
  return (
    <div className="message" style={{}}>
      <div className="imessage" ref={scrollRef}>
        {messages.map((msg, i) => (
          <p className={msg.from} key={i}>{msg.message}</p>
        ))}
        <span className="message-end"></span>
      </div>
      <div className="chat">
        <form onSubmit={onSubmit}>
          <input type="text" value={inputMessage} placeholder="메세지를 입력하세요" onChange={onChange} /><input type="submit" value="전송" onClick={onSubmit} />
        </form>
      </div>
    </div>
  )
}

export default Chat
