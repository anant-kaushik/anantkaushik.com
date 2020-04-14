import React, { Component } from "react";
import { A } from "components";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import "./NavBar.css";
import routes from "routes";
import { data } from "utils";

const EMAIL = data.email;

const TabButton = ({ history, route }) => (
  <li
    className={
      "tab" + (history.location.pathname === route.path ? " active" : "")
    }
  >
    <button
      className={route.home ? "home-btn" : ""}
      onClick={() => {
        history.push(route.path);
      }}
    >
      {route.home ? (
        <i className="fa fa-home" aria-hidden="true" />
      ) : (
        route.name
      )}
    </button>
  </li>
);

const Tabs = ({ history, routes }) => (
  <ul className="tabs">
    {routes.map((route) => (
      <TabButton history={history} route={route} />
    ))}
  </ul>
);

const SocialIcons = ({ github, linkedin }) => (
  <div className="social-icons pull-right">
    <A className="gh" href={github.href}>
      <i className="fa fa-github" aria-hidden="true"></i>
    </A>
    <A className="ld" href={linkedin.href}>
      <i className="fa fa-linkedin" aria-hidden="true"></i>
    </A>
  </div>
);

const Links = ({ links }) => (
  <div>
    <A href={"mailto:" + EMAIL} className="pull-right site-btn icon hidden-xs">
      Mail<i className="fa fa-paper-plane" aria-hidden="true"></i>
    </A>
    <SocialIcons {...links.socials} />
  </div>
);

const Nav = ({ children }) => (
  <header>
    <nav>
      <Row>{children}</Row>
    </nav>
  </header>
);

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Col md="8" sm="8" xs="8">
          <Tabs history={this.props.history} routes={routes} />
        </Col>
        <Col md="4" sm="4" xs="4">
          <Links links={data.links} />
        </Col>
      </Nav>
    );
  }
}

export default withRouter(NavBar);
