import React from "react"

import "./LinkRefer.css";

const LinkRefer = ({ children, link }) => (
    <a className="link-refer" href={link}>{children}</a>
);

export default LinkRefer;