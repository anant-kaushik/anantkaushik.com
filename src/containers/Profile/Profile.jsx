import React, { Component } from "react";

import "./Profile.css";
import { RoundButton } from "components";
import anant from "assets/images/profile.jpg";
import resume from "assets/resume/Resume.pdf";

const PROFILE_PHOTO = anant;
const RESUME = resume;

const ProfileName = ({ name, job }) => (
  <div className="profile-name">
    <span className="name">{name}</span>
    <br />
    <span className="job">{job}</span>
  </div>
);

const ProfileImage = ({ src }) => (
  <figure className="profile-image">
    <img src={src} alt="profilePic" />
  </figure>
);

const ProfileInformation = ({ name, dob, job, email, skype }) => (
  <ul className="profile-information">
    <li />
    <li>
      <p>
        <span>Name:</span> {name}
      </p>
    </li>
    <li>
      <p>
        <span>Birthday:</span> {dob}
      </p>
    </li>
    <li>
      <p>
        <span>Job:</span> {job}
      </p>
    </li>
    <li>
      <p>
        <span>Email:</span> {email}
      </p>
    </li>
    <li>
      <p>
        <span>Skype:</span> {skype}
      </p>
    </li>
  </ul>
);

const DownloadCvButton = () => {
  const startDownload = () => {
    let a = document.createElement('a');
    a.href = RESUME;
    a.download = "anant_cmu_resume";
    a.click();
  };

  return (
    <div className="col-md-12">
      <RoundButton
        style={{
          margin: "18px auto 30px",
          display: "block"
        }}
        onClick={startDownload}
      >
        Resume <i className="fa fa-download" aria-hidden="true" />
      </RoundButton>
    </div>
  )
};

class Profile extends Component {
  data = {
    name: "Anant Kaushik",
    job: "Masters Student",
    dob: "01 August 1996",
    email: "anantk@cs.cmu.edu",
    skype: "live:anantkaushik.me"
  };

  render() {
    return (
      <div className="profile">
        <ProfileName {...this.data} />
        <ProfileImage src={PROFILE_PHOTO} />
        <ProfileInformation {...this.data} />
        <DownloadCvButton />
      </div>
    );
  }
}

export default Profile;
