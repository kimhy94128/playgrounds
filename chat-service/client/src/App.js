import { useState, useRef, useEffect } from 'react'
import io from 'socket.io-client'
import './App.css'

const socket = io('localhost:5000')

function App() {
  const [ inputMessage, setInputMessage ] = useState('')
  const [ messages, setMessages ] = useState([])

  const scrollRef = useRef()
  
  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [messages])
  
  socket.on('from-me', (msg) => {
    setMessages([...messages, msg])
  })

  const onChange = ({currentTarget : { value }} ) => {
    setInputMessage(value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if(inputMessage.length > 0){
      socket.emit('from-me', inputMessage)
    }
    setInputMessage('')
  }


  return (
    <>
      <div className="imessage" ref={scrollRef}>
        <p className="from-them">It was loud. We just laid there and said &ldquo;is this an earthquake? I think this is an earthquake.&rdquo;</p>
        <p className="from-me">Like is this an earthquake just go back to sleep</p>
        <p className="from-them margin-b_one">It&rsquo;s more like &ldquo;this is an earthquake. Check the Internet. Yup. Earthquake. This is the size. This is the epicenter. Check social media. Make sure the East Coast knows I&rsquo;m alive. Okay, try and go back to sleep.&rdquo;</p>
        <p className="from-me no-tail emoji">👍🏻</p>
        <p className="from-me">Glad you&rsquo;re safe</p>
        <p className="from-them">It was loud. We just laid there and said &ldquo;is this an earthquake? I think this is an earthquake.&rdquo;</p>
        <p className="from-me">Like is this an earthquake just go back to sleep</p>
        <p className="from-them margin-b_one">It&rsquo;s more like &ldquo;this is an earthquake. Check the Internet. Yup. Earthquake. This is the size. This is the epicenter. Check social media. Make sure the East Coast knows I&rsquo;m alive. Okay, try and go back to sleep.&rdquo;</p>
        <p className="from-me no-tail emoji">👍🏻</p>
        <p className="from-me">Glad you&rsquo;re safe</p>
      {messages.map((list, i) => (
        <p className="from-them" key={i}>{list}</p>
      ))}
        <span className="message-end"></span>
      </div>
      <div className="chat">
        <form onSubmit={onSubmit}>
          <input type="text" value={inputMessage} placeholder="메세지를 입력하세요" onChange={onChange} /><input type="submit" value="전송" onClick={onSubmit} />
        </form>
      </div>
    </>
  );
}

export default App;
