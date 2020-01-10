import React from "react";
import PropTypes from 'prop-types';

import "./LinkRefer.css";

const LinkRefer = ({ children, link }) => (
    <a className="link-refer" href={link} target="_blank" rel="noopener noreferrer">{children}</a>
);

LinkRefer.propTypes = {
    link: PropTypes.string.isRequired,
}

export default LinkRefer;