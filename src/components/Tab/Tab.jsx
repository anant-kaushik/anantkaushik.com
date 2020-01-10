import React from "react";
import PropTypes from 'prop-types';

import "./Tab.css";

const Tab = ({ name }) => (
    <li >
        <a href="#tab" className="nav-tab">{name}</a>
    </li>
)

Tab.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Tab;