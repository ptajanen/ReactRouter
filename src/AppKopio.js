import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div> 
      <h1>This is HOME page</h1>
    </div>
  );
}
const About = () => {
  return (
    <div> 
      <h1>This is ABOUT page</h1>
    </div>
  );
}
const Contact = () => {
  return (
    <div> 
      <h1>This is CONTACT page</h1>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route> 
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
