import io from 'socket.io-client';

const socket = io('localhost:5000')
function App() {
  const onClick = () => {
    socket.emit('msg', 'hi');
  }
  socket.on('msg', (msg) => {
    console.log(msg);
  })
  return (
    <div>
      hello socket
      <button onClick={onClick}>클릭</button>
    </div>
  );
}

export default App;
