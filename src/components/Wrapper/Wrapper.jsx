import React from "react";
import { Container } from "react-bootstrap";

import "./Wrapper.css";

const Wrapper = ({ className, children }) => (
  <Container className={"wrapper " + className}>{children}</Container>
);

export default Wrapper;
