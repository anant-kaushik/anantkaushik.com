import React from "react";
import { Row, Col } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "routes";

import { Wrapper, Footer } from "components";
import { Profile, NavBar } from "containers";

const getRoutes = (routes) => (
  <Switch>
    {routes.map((prop, key) => (
      <Route path={prop.path} component={prop.component} key={key} />
    ))}
    <Redirect from="/" to="/home" />
  </Switch>
);

const MainPage = () => (
  <Wrapper className="top_60">
    <Row>
      <Col xl="3" lg="4" md="12">
        <Profile />
      </Col>
      <Col xl="9" lg="8" md="12">
        <NavBar />
        {getRoutes(routes)}
        <Footer />
      </Col>
    </Row>
  </Wrapper>
);

export default MainPage;
