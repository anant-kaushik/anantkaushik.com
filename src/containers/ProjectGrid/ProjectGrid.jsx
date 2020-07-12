import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import "./ProjectGrid.css";
import { ProjectItem } from "components";

class ProjectGrid extends Component {
  constructor(props) {
    super(props);
    this.shuffler = props.shuffler;
    this.sizer = props.sizer;
  }

  render() {
    const { projects } = this.props;
    return (
      <>
        <Row ref={this.shuffler} className="my-shuffle no_margin">
          {projects.map((project, key) => (
            <ProjectItem key={key} {...project} />
          ))}
          <Col
            sm={6}
            md={4}
            ref={this.sizer}
            className="photo-grid__sizer"
          ></Col>
        </Row>
      </>
    );
  }
}

export default ProjectGrid;
