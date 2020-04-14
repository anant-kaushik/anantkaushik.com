import React, { Component } from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

import "./Resume.css";
import { Content, Section, SectionTitle } from "components";
import { data } from "utils";

const renderTooltip = (text) => {
  return <Tooltip>{text}</Tooltip>;
};

const PhotoLink = ({ src, alt, link }) => (
  <a
    className="photo_link"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <OverlayTrigger
      placement="below"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip(alt)}
    >
      <img src={src} alt={alt} />
    </OverlayTrigger>
  </a>
);

const ExpDetials = ({ title, experiences, LiComponent }) => (
  <Col md={6}>
    <ul className="timeline top_30">
      <li>
        <i className="fa fa-suitcase" aria-hidden="true"></i>
        <h2 className="timeline-title">{title}</h2>
      </li>
      {experiences.map((exp) => (
        <LiComponent {...exp} />
      ))}
    </ul>
  </Col>
);

const ExpLi = ({ photoLink, title, company, summary, duration }) => (
  <li>
    <PhotoLink {...photoLink}></PhotoLink>
    <h3 className="line-title">{title}</h3>
    <span className="little-level">{company}</span>
    <span className="little-duration">{duration}</span>
    <p className="little-text">{summary}</p>
  </li>
);

const EduLi = ({
  university,
  level,
  photoLink,
  duration,
  courses,
  summary,
}) => (
  <li>
    <PhotoLink {...photoLink}></PhotoLink>
    <h3 className="line-title">{university}</h3>
    <span className="little-level">{level}</span>
    <span className="little-duration">{duration}</span>
    <p className="little-text">{summary}</p>
  </li>
);

const Experience = () => (
  <Section>
    <SectionTitle title="Resume" />
    <Row className="no_margin">
      <ExpDetials
        title="Working History"
        experiences={data.workexp}
        LiComponent={ExpLi}
      />
      <ExpDetials
        title="Education History"
        experiences={data.eduexp}
        LiComponent={EduLi}
      />
    </Row>
  </Section>
);

class Resume extends Component {
  render() {
    return (
      <Content>
        <Experience />
      </Content>
    );
  }
}

export default Resume;
