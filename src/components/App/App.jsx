import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "routes";
import "./App.css";

import "assets/fonts/flaticon/flaticon.css";
import "assets/fonts/font-awesome/font-awesome.min.css";
class App extends Component {
  getRoutes = routes => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    });
  };
  render() {
    return (
      <Router>
        <div className="App" />
        <Switch>{this.getRoutes(routes)}</Switch>
      </Router>
    );
  }
}

export default App;
