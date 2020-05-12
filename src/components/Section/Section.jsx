import React from "react";
import { SectionTitle } from "components";

const Section = ({ children, background, title, ...rest }) => (
  <section
    className="padding_30 padbot_45"
    style={{
      paddingLeft: "30px",
      paddingRight: "30px",
      background: background ? background : "transparent",
    }}
  >
    {title ? <SectionTitle title={title} /> : null}
    {children}
  </section>
);

export default Section;
