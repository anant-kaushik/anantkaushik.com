import React from "react";

const Paragragh = ({ children, ...rest }) => (
    <p style={{
        "fontSize": "13px",
        "color": "#4c4c4c",
        "lineHeight": "24px"
    }} {...rest}>{children}</p>
)

export default Paragragh;