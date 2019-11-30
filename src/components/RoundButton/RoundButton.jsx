import React from "react";
import Button from "react-bootstrap/Button";

import "./RoundButton.css";

const RoundButton = ({ children, ...rest }) => (
  <Button className="site-btn icon" {...rest}>
    {children}
  </Button>
);

export default RoundButton;
