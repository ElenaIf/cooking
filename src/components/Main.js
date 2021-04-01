import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Recipes from "./Recipes";
import Nav from "./Nav";

import { Switch, Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default Main;
