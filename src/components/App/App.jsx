import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { history } from "utils";
import MainPage from "views/MainPage.jsx";
import "assets/fonts/flaticon/flaticon.css";
import "assets/fonts/font-awesome/css/font-awesome.min.css";
import "assets/css/reset.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Route path="/" component={MainPage} />
        </Router>
      </div>
    );
  }
}

export default App;
