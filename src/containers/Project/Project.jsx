import React, { Component } from "react";

import { Content, Section } from "components";
import { ProjectShuffle } from "containers";
import data from "utils/data";

const ProjectsOverview = ({ data }) => (
  <Section title="while 1 { Eat(); Sleep(); Code(); }">
    <ProjectShuffle filters={data.filters} projects={data.projects} />
  </Section>
);

class Project extends Component {
  render() {
    return (
      <Content>
        <ProjectsOverview data={data.mywork} />
      </Content>
    );
  }
}

export default Project;
