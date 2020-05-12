import React, { Component } from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

import "./Resume.css";
import { Content, Section, SectionTitle, A } from "components";
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
      placement="bottom"
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
      {experiences.map((exp, key) => (
        <LiComponent {...exp} key={key} />
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
  <Section title="How I used my time">
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

const PaperItem = ({ image, title, info, link }) => (
  <Col lg={4} md={6} xs={12}>
    <div className="cbp-item webdesign">
      <div className="cbp-item-wrapper">
        <A href={link}>
          <figure>
            <div className="icon">
              <i className="fa fa-clone" aria-hidden="true"></i>
            </div>
            <img src={image.src} alt={image.alt} />
            <figcaption>
              <span className="title">{title}</span>
              <br />
              <span className="info">{info}</span>
            </figcaption>
          </figure>
        </A>
      </div>
    </div>
  </Col>
);

const Papers = ({ papers }) => (
  <Section title="Publications" background="#fafafa">
    <SectionTitle />
    <Row className="no_margin papers-wrapper">
      {papers.map((paper, key) => (
        <PaperItem {...paper} key={key} />
      ))}
    </Row>
  </Section>
);

class Resume extends Component {
  render() {
    return (
      <Content>
        <Experience />
        <Papers papers={data.papers} />
      </Content>
    );
  }
}

export default Resume;
