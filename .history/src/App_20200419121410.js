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
      <Switch>
          <Route exact path="/sign-in">
            <SignInForm />
          </Route>
          <Route path="/sign-up">
            <SignUpForm />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
