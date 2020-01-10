import React from "react";
import PropTypes from 'prop-types';

import "./SectionTitle.css";

const SectionTitle = ({ title, ...rest }) => (
    <div className="section-title">
        <span></span>
        <h2>{title}</h2>
    </div>
);

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
}

export default SectionTitle;
