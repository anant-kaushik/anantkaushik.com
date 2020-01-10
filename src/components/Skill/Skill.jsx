import React from "react";
import PropTypes from 'prop-types';

import './Skill.css';
import { Col } from "react-bootstrap";
import Paragragh from "../Paragragh/Paragragh";

const SkillIcon = ({ icon }) => (
    <div className="skill-icon">
        <i className={icon}></i>
    </div>
)
const SkillTitle = ({ title }) => (
    <span className="skill-title">{title}</span>
)
const Desc = ({ text }) => (
    <Paragragh className="skill-desc">{text}</Paragragh>
)

const Skill = ({ className, title, desc, icon }) => (
    <Col md="6" xs="12">
        <div className={"skill " + className} >
            <SkillIcon icon={icon} />
            <SkillTitle title={title} />
            <Desc text={desc} />
        </div>
    </Col >
)

Skill.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Skill;