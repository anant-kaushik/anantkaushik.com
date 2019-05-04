import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "routes";
import "./App.css";

import "assets/fonts/flaticon/flaticon.css";
import "assets/fonts/font-awesome/css/font-awesome.min.css";
import "assets/css/reset.css";
class App extends Component {
  getRoutes = routes => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>{this.getRoutes(routes)}</Switch>
        </Router>
      </div>
    );
  }
}

export default App;
