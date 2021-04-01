import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Recipes from "./Recipes";

import { Switch, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    );
  }
}

export default Main;
