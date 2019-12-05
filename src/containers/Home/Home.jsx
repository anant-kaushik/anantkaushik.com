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
            {skills.map(skill => (
                <Skill {...skill} />
            ))}
        </Row>
    </Section>
)

const data = {
    skills: [
        {
            title: "Web Development",
            desc: "Developed scalable web applications with the latest frameworks and technologies",
            icon: "flaticon-loading"
        },
        {
            title: "Mobile  Development ",
            desc: "Experienced in Android development using Java. Created multiple applications and SDK's",
            icon: "flaticon-responsive"
        },
        {
            title: "System Architecture",
            desc: "Designing end-to-end scalable architecture. Will be studying scable systems and Architecture in the spring semester",
            icon: "flaticon-planning"
        },
        {
            title: "Team Management",
            desc: "Experienced in managing team using agile processes like scrum",
            icon: "flaticon-brainstorming"
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
