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

const AboutMe = ({ about }) => (
    <Section>
        <SectionTitle title="About Me" />
        <Paragragh className="top_30">
            I'm currently pursuing my  <LinkRefer link="https://mse.isri.cmu.edu/applicants/mse-ap/index.html">Master of Software Engineering at Carnegie Mellon University</LinkRefer>,
            and I'm looking for software development internships in challenging projects for summer 2020.
            <br />
            <br />
            Before coming to CMU, I was the Lead developer of Zerone Microsystems Private Limited, one of the four Indian startups selected for the Anthill Ventures’ A- Scale program.
            The former KPMG CEO and former KPMG partner founded this firm. I worked on the core technology and led the development of several use - cases like an
            <LinkRefer link="http://conyct.com"> identity exchange app</LinkRefer>, and
            <LinkRefer link="http://conyct.com/vms"> visitor management web and mobile application</LinkRefer>,
            <LinkRefer link="http://zpi.cash"> payment exchange app</LinkRefer>.
            <br />
            <br />
            In my master's, I have been learning the fundamentals of software engineering complemented and what it truly means to create a scalable system from scratch.
            <br />
            <br />
            Apart from that, startups and innovations are very dear to me. My elective Entrepreneurship and Innovation in Technology allowed me to connect with cutting-edge startup CEOs, VCs, and angles and learn about the other side of the coin, straight from the horse's mouth.

        </Paragragh>
    </Section>
)

const Skills = ({ skills }) => (
    <Section background="#fafafa">
        <SectionTitle title="Skills" />
        <Row className="top_45">
            {skills.map(skill => (
                <Skill title={skill.title} desc={skill.desc} />
            ))}
        </Row>
    </Section>
)

const data = {
    skills: [
        {
            title: "Web Development",
            desc: "I have been working on web design for past 1 year."
        },
        {
            title: "Mobile  Development ",
            desc: "I have been working on android and iOS platform for 2 years."
        },
        {
            title: "System Architecture",
            desc: "I have been designing end-to-end architecture for 2 years."
        },
        {
            title: "Team Management",
            desc: "I have been managing team using scrum for 1 year."
        }
    ]
}

class Home extends Component {
    render() {
        return (
            <Content>
                <div id="home">
                    <AboutMe />
                    <Skills skills={data.skills} />
                </div>
            </Content>
        )
    }
}

export default Home;
