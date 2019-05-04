import React, { Component } from "react";

import "./Profile.css";
import { RoundButton } from "components";
import glasses from "assets/images/glasses.png";

console.log(glasses);

const PROFILE_PHOTO =
  "https://media.licdn.com/dms/image/C4E03AQFw-hMffdPSog/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=gY2RiPCZJTYXR9TsDCmzsOE6rYHTEflhow9AzuIceCQ";

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

const DownloadCvButton = () => (
  <div class="col-md-12">
    <RoundButton
      style={{
        margin: "18px auto 30px",
        display: "block"
      }}
    >
      Download Cv <i class="fa fa-download" aria-hidden="true" />
    </RoundButton>
  </div>
);

class Profile extends Component {
  data = {
    name: "Anant Kaushik",
    job: "CMU Grad Student",
    dob: "01 August 1996",
    email: "anantk@andrew.cmu.edu",
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
