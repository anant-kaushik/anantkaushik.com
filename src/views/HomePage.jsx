import React from "react";
import { Row, Col } from "react-bootstrap";

import { Wrapper } from "components";
import { Profile } from "containers";

const HomePage = () => (
  <Wrapper className="top_60">
    <Row>
      <Col lg="3" md="4">
        <Profile />
      </Col>
    </Row>
  </Wrapper>
);

export default HomePage;
