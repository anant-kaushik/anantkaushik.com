import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import "./NavBar.css";
import routes from "routes";

const EMAIL = "anantk@cs.cmu.edu";

const TabButton = ({ history, route }) => (
    <li className={"tab" + (history.location.pathname === route.path ? " active" : "")}>
        <button
            className={route.home ? "home-btn" : ""}
            onClick={() => {
                history.push(route.path);
            }}>
            {route.home ?
                <i className="fa fa-home" aria-hidden="true" /> :
                route.name
            }
        </button>
    </li>
);

const Tabs = ({ history, routes }) => (
    <ul className="tabs">
        {routes.map(route =>
            <TabButton
                history={history}
                route={route} />
        )}
    </ul >
)

const Links = () => (
    <div>
        <a href={"mailto:" + EMAIL} className="pull-right site-btn icon hidden-xs">Mail<i className="fa fa-paper-plane" aria-hidden="true"></i></a>
    </div>

)
const Nav = ({ children }) => (
    <header>
        <nav>
            <Row>
                {children}
            </Row>
        </nav>
    </header>
)

class NavBar extends Component {
    render() {
        return (
            <Nav>
                <Col md="8" sm="8" xs="4">
                    <Tabs
                        history={this.props.history}
                        routes={routes} />
                </Col>
                <Col md="4" sm="4" xs="8">
                    <Links />
                </Col>
            </Nav>
        )
    }
}

export default withRouter(NavBar);