import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage';
import LoginPage from './components/views/LoginPage';
import RegisterPage from './components/views/RegisterPage';
import Auth from './hoc/auth'
// import Footer from './components/views/Footer';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Auth(LandingPage, null)} />
      <Route exact path="/login" component={Auth(LoginPage, false)} />
      <Route exact path="/register" component={Auth(RegisterPage, false)} />
    </Router>
  );
}

export default App;
