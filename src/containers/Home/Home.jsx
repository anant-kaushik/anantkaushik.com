import React, { Component } from "react";

import { Content, Section, Paragragh, Skill, LinkRefer } from "components";
import { Row } from "react-bootstrap";
import { data } from "utils";

const AboutMe = ({ about }) => (
  <Section title="Hi! I am Anant">
    <Paragragh className="top_30">
      I am Master's student at{" "}
      <LinkRefer link="https://cu.edu">Carnegie Mellon University</LinkRefer>{" "}
      persuing{" "}
      <LinkRefer link="mse.isri.cmu.edu/applicants/mse-ap/index.html">
        Software Engineering
      </LinkRefer>
      . Previously, I was the Lead developer at Zerone Microsystems Private
      Limited, founded by the team of a former KPMG Partners. I worked on the
      core technology and led the development of several use - cases which
      included a<LinkRefer link="http://zpi.cash"> payment app</LinkRefer>,
      <LinkRefer link="http://conyct.com"> identity exchange app</LinkRefer>,
      and{" "}
      <LinkRefer link="http://conyct.com/vms">
        visitor management web and mobile application
      </LinkRefer>
      .
    </Paragragh>
  </Section>
);

const Skills = ({ skills }) => (
  <Section title="Skills" background="#fafafa">
    <Row className="top_45">
      {skills.top.map((skill, index) => (
        <Skill className="bottom_30" {...skill} key={index} />
      ))}
      {skills.bottom.map((skill, index) => (
        <Skill {...skill} key={index} />
      ))}
    </Row>
  </Section>
);

class Home extends Component {
  render() {
    return (
      <Content>
        <div>
          <AboutMe />
          <Skills skills={data.skills} />
        </div>
      </Content>
    );
  }
}

export default Home;
