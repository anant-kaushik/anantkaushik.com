import React from "react";

const Section = ({ children, background, ...rest }) => (
    <section
        className="padding_30 padbot_45"
        style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            background: background ? background : "transparent"
        }}
    >
        {children}
    </section>
);

export default Section;
