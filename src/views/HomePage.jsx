import React from "react";
import { Row, Col } from "react-bootstrap";

import { Wrapper } from "components";
import {
  Profile,
  Home,
  NavBar
} from "containers";

const HomePage = () => (
  <Wrapper className="top_60">
    <Row>
      <Col lg="3" md="12">
        <Profile />
      </Col>
      <Col lg="9" md="12">
        <NavBar />
        <Home />
      </Col>
    </Row>
  </Wrapper>
);

export default HomePage;
