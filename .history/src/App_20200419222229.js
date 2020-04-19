import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
   <Router>
      <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
      <Switch>
          <Route exact path="/sign-in">
            <SignInForm />
          </Route>
          <Route exact path="/sign-up">
            <SignUpForm />
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
