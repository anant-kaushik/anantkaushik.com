import React from "react";

import "./Tab.css";

const Tab = ({ name }) => (
    <li >
        <a href="#tab" className="nav-tab">{name}</a>
    </li>
)

export default Tab;