import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import List from './components/List'
import './App.css'

function App() {
  return (
    <Router>
      <List />
      <Chat />
    </Router>
  );
}

export default App;
