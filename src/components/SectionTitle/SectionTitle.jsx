import React from "react";

import "./SectionTitle.css";

const SectionTitle = ({ title, ...rest }) => (
    <div class="section-title">
        <span></span>
        <h2>{title}</h2>
    </div>
);

export default SectionTitle;
