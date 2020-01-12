import React, { Component } from "react";

import {
    Content,
    Section,
    SectionTitle,
    Paragragh,
    Skill,
    LinkRefer
} from "components";
import { Row } from "react-bootstrap";
import { data } from "utils";

const AboutMe = ({ about }) => (
    <Section>
        <SectionTitle title="Hi! I am Anant" />
        <Paragragh className="top_30">
            I'm currently pursuing my  <LinkRefer link="https://mse.isri.cmu.edu/applicants/mse-ap/index.html">Master of Software Engineering at Carnegie Mellon University</LinkRefer>,
            and I'm looking for software development internships in challenging projects for summer 2020.
            <br />
            <br />
            Before joining CMU, I was the Lead developer at Zerone Microsystems Private Limited, one of the four Indian startups selected for the Anthill Ventures’ A- Scale program which was founded by the team of a former KPMG CEO and Partner.
            I worked on the core technology and led the development of several use - cases which included an
            <LinkRefer link="http://conyct.com"> identity exchange app</LinkRefer>, and
            <LinkRefer link="http://conyct.com/vms"> visitor management web and mobile application</LinkRefer>,
            <LinkRefer link="http://zpi.cash"> payment exchange app</LinkRefer>.
            <br />
            <br />
            Through my Master's, I am trying to learn the fundamentals of software engineering and what it truly means to create a scalable system from scratch.
            <br />
            <br />
            Apart from this, I have a love for startups and creative innovations. My elective Entrepreneurship and Innovation in Technology allowed me to connect with cutting-edge startup CEOs, VCs, and Angels which has helped me learn about the other side of the coin straight from the horse's mouth.
        </Paragragh>
    </Section>
)

const Skills = ({ skills }) => (
    <Section background="#fafafa">
        <SectionTitle title="Skills" />
        <Row className="top_45">
            {skills.top.map((skill, index) => (
                <Skill className="bottom_30" {...skill} key={index} />
            ))}
            {skills.bottom.map((skill, index) => (
                <Skill {...skill} key={index} />
            ))}
        </Row>
    </Section>
)


class Home extends Component {
    render() {
        return (
            <Content>
                <div>
                    <AboutMe />
                    <Skills skills={data.skills} />
                </div>
            </Content>
        )
    }
}

export default Home;
