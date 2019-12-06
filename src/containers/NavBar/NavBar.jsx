import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import "./NavBar.css";

const EMAIL = "anantk@cs.cmu.edu";


const Tabs = () => (
    <ul className="tabs">
        <li className="tab">
            <a className="home-btn" href="#home">
                <i className="fa fa-home" aria-hidden="true"></i>
                <span style={{ display: "none" }}>Cleacer way to remove a warning !!!</span>
            </a>
        </li>
    </ul>
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
                    <Tabs />
                </Col>
                <Col md="4" sm="4" xs="8">
                    <Links />
                </Col>
            </Nav>
        )
    }
}

export default NavBar;