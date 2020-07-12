import React from "react";
import { Col } from "react-bootstrap";

import { A } from "components";
import "./ProjectItem.css";

const createLinkDiv = (key, name, link) => {
  console.log(link);
  let icon = "";
  switch (name) {
    case "github":
      icon = "devicon-github-plain colored";
      break;
    default:
      //error case
      return (
        <A key={key} href="#">
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
        </A>
      );
  }

  return (
    <A key={key} href={link}>
      <i className={icon} aria-hidden="true"></i>
    </A>
  );
};

const createTagDiv = (key, name) => {
  let icon = "";
  switch (name) {
    case "android":
      icon = "devicon-android-plain colored";
      break;
    case "docker":
      icon = "devicon-docker-plain colored";
      break;
    case "vagrant":
      icon = "devicon-vagrant-plain colored";
      break;
    case "react":
      icon = "devicon-react-plain colored";
      break;
    case "c":
      icon = "devicon-c-plain colored";
      break;
    case "aws":
      icon = "devicon-amazonwebservices-original colored";
      break;
    case "python":
      icon = "devicon-python-plain colored";
      break;
    default:
      //error case
      return <i className="fa fa-exclamation-circle" aria-hidden="true"></i>;
  }

  return <i key={key} className={icon} aria-hidden="true"></i>;
};

const ProjectItem = ({ name, group, info, links, tags, image }) => {
  let metaLinks =
    links !== undefined
      ? Object.keys(links).reduce((acc, key, index) => {
          acc.push(createLinkDiv(index, key, links[key]));
          return acc;
        }, [])
      : [];

  let metaTags =
    tags !== undefined
      ? tags.reduce((acc, tag, index) => {
          acc.push(createTagDiv(index, tag));
          return acc;
        }, [])
      : [];

  return (
    <Col
      sm={6}
      md={4}
      className="project-item"
      data-groups={JSON.stringify(group)}
    >
      <div className="project-item-content">
        <img src={image.src} alt={image.alt} />
        <div className="project-description">
          <div className="title">{name}</div>
          <div className="info">{info}</div>
          <div className="meta">
            <div className="links">{metaLinks}</div>
            <div className="tags">{metaTags}</div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectItem;
