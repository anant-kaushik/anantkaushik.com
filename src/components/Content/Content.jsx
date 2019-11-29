import React from "react";

import "./Content.css";

const Content = ({ children, ...rest }) => (
    <div className="content" {...rest}>
        {children}
    </div >
);

export default Content;