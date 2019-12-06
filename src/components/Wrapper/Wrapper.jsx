import React from "react";
import { Container } from "react-bootstrap";

import "./Wrapper.css";

const Wrapper = ({ children }) => (
  <Container className="wrapper ">{children}</Container>
);

export default Wrapper;
