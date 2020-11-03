import { HashRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage';
import LoginPage from './components/views/LoginPage';
// import RegisterPage from './components/views/RegisterPage';
// import Footer from './components/views/Footer';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
    </Router>
  );
}

export default App;
