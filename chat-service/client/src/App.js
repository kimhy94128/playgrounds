import io from 'socket.io-client'

const socket = io('localhost:5000')

function App() {
  return (
    <div>
      hello world
    </div>
  );
}

export default App;
