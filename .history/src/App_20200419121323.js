import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SignInForm from './components/SignInForm';

function App() {
  return (
   <Router>
      <Switch>
          <Route exact path="/sign-in">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
