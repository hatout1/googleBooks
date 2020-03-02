import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav";
import Results from "./Components/Results";
import SearchFrom from "./Components/SearchForm";
import Saved from "./Components/Saved";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchFrom}>
            <SearchFrom />
            <Results />
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
