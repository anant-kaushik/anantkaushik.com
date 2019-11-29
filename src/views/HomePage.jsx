import React from "react";
import { Row, Col } from "react-bootstrap";

import { Wrapper } from "components";
import { Profile, Home } from "containers";

const HomePage = () => (
  <Wrapper className="top_60">
    <Row>
      <Col lg="3" md="4">
        <Profile />
      </Col>
      <Col lg="9" md="8">
        <Home />
      </Col>
    </Row>
  </Wrapper>
);

export default HomePage;
