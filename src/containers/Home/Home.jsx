import React, { Component } from "react";

import { Content, Section, Paragragh, Skill, LinkRefer } from "components";
import { Row } from "react-bootstrap";
import { data } from "utils";

const AboutMe = ({ about }) => (
  <Section title="Hi! I am Anant">
    <Paragragh className="top_30">
      Tech lead at Digital Dream Labs working on{" "}
      <LinkRefer link="https://www.digitaldreamlabs.com/pages/meet-vector">
        Vector 2.0
      </LinkRefer>
      . I did my master's from{" "}
      <LinkRefer link="https://cmu.edu">Carnegie Mellon University</LinkRefer>{" "}
      in{" "}
      <LinkRefer link="https://mse.isri.cmu.edu/index.html">
        Software Engineering - Scalable Systems
      </LinkRefer>
      .
      <br />
      <br />
      Previously, I was the Lead developer at Zerone Microsystems Private
      Limited, commonly know as{" "}
      <LinkRefer link="https://cardse.co/">CardSe</LinkRefer>. There I worked on
      the core swipe and pay technology and{" "}
      <LinkRefer link="https://cardse.co/">
        prototyping the payment app
      </LinkRefer>
      . I also worked on the development of mutiple usecases for our swipe tech
      such as{" "}
      <LinkRefer link="https://play.google.com/store/apps/details?id=com.zeronecorp.android.apps.conyctapp&hl=en_US&gl=US">
        identity exchange app
      </LinkRefer>
      , and{" "}
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
