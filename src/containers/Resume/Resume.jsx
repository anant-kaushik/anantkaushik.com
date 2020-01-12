import React, { Component } from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

import "./Resume.css";
import {
    Content,
    Section,
    SectionTitle,
} from "components";
import { data } from "utils";

const renderTooltip = (text) => {
    return <Tooltip>{text}</Tooltip>;
}

const PhotoLink = ({ src, alt, link }) => (
    <a className="photo_link" href={link} target="_blank" rel="noopener noreferrer">
        <OverlayTrigger
            placement="below"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip(alt)}>
            <img src={src} alt={alt} />
        </OverlayTrigger>
    </a >
)

const ExpDetials = ({ title, experiences }) => (
    <Col md={6}>
        <ul className="timeline top_30">
            <li><i class="fa fa-suitcase" aria-hidden="true"></i><h2 class="timeline-title">{title}</h2></li>
            {experiences.map(exp => (
                <li>
                    <PhotoLink {...exp.photoLink}></PhotoLink>
                    <h3 class="line-title">{exp.title}</h3>
                    <span>{exp.duration}</span>
                    <p class="little-text">{exp.summary}</p>
                </li>
            ))}
        </ul>
    </Col>
)

const Experience = () => (
    <Section>
        <SectionTitle title="Resume" />
        <Row className="no_margin">
            <ExpDetials title="Working History" experiences={data.workexp} />
            <ExpDetials title="Education History" experiences={data.eduexp} />
        </Row>
    </Section >
);

class Resume extends Component {
    render() {
        return (
            <Content>
                <Experience />
            </Content>
        )
    }
}

export default Resume;