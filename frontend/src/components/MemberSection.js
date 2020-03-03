import React from 'react';
import '../styles/MemberSection.css';

const GithubInfo = (props) => {
  return (
    <p><span className="bold">{props.value}</span> {props.type}</p>
  );
}

const MemberSection = (props) => {
  const {
    img,
    commits,
    name,
    bio,
    major,
    issues,
  } = props.member;

  return (
    <div className="member-section">
      <div className="member-section-header">
        {img !== '' && <img className="member-img" src={require("../assets/" + img)} />}
        <div className="member-info">
          <h4 className="member-name">{name}</h4>
          <div className="github-info-container">
            <GithubInfo type="commits" value={commits}/>
            <GithubInfo type="issues" value={issues}/>
            <GithubInfo type="unit tests" value={0}/>
          </div>
          <p className="member-major">{major}</p>
        </div>
      </div>
      <div className="member-bio">
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default MemberSection;
