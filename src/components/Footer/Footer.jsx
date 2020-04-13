import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { A } from "components";
import "./Footer.css";

const Footer = () => (
  <footer>
    <Col md="12" className="footer top_30 bottom_30">
      <Container>
        <Row>
          <Col md="4" className="name hidden-lg hidden-md hidden-sm hidden-xs">
            Anant Kaushik.
          </Col>
          <Col xl="8" md="12" className="copyright">
            © 2020 Converted to react by me created by{" "}
            <A
              href="https://themeforest.net/user/tavonline"
              target="_blank"
              rel="noopener noreferrer"
            >
              tavonline
            </A>
          </Col>
        </Row>
      </Container>
    </Col>
  </footer>
);

export default Footer;
