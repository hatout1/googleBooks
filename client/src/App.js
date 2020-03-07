import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Nav from "./Components/Nav";
import Saved from "./Components/Saved";
import SearchFrom from "./Components/SearchForm";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchFrom}>
            <SearchFrom />
          </Route>

          <Route path="/saved" component={Saved}>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
