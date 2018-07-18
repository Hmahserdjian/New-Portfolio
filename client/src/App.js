import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact}/>
      </Switch>
    </div>
  </Router>
);

export default App