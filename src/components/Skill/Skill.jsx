import React from "react";

import './Skill.css';
import { Col } from "react-bootstrap";
import Paragragh from "../Paragragh/Paragragh";


const SkillTitle = ({ title }) => (
    <span className="skill-title">{title}</span>
)
const Desc = ({ text }) => (
    <Paragragh className="skill-desc">{text}</Paragragh>
)

const Skill = ({ title, desc }) => (
    <Col md="3" sm="6" xs="12">
        <div className="skill" >
            <SkillTitle title={title} />
            <Desc text={desc} />
        </div>
    </Col >
)

export default Skill;