import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MemberSection from '../components/MemberSection';
import SectionHeader from "../components/SectionHeader";
import '../styles/About.css';

const PURPOSE = " is a web application for travelers who want to make the most out of their trip. When travelling to an unfamiliar place, the amount of places to see and things to do can be overwhelming. _ provides users the ability to filter and sort through all the noise in order to find the experience they are looking for.";
const FLASK_USAGE = "Our backend will be a RESTful API built with Flask. It will allow our front end to make HTTP Requests to our database.";
const AWS_USAGE = "In order to host our website, we employed the use of AWS S3 for static website hosting."
const REACT_USAGE = "We used React to implement the frontend of our application. It allows us to break up our website into different components and manage states of those components over time."


const GithubStat = (props) => {
  return (
    <div className="github-stat">
      <h2 align="center">{props.value}</h2>
      <p align="center">{props.type}</p>
    </div>
  );
}

const ToolCard = (props) => {
  return (
    <a className="tool-link" href={props.link} target="_blank">
      <div className="tool-card">
        <div className="center">
          <img className="tool-img" src={require("../assets/" + props.img)}/>
        </div>
        <p>{props.usage}</p>
      </div>
    </a>
  );
}

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Kim',
      major: 'ECE ᛫ Frontend',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Habitant morbi tristique senectus et netus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'KimchiBean',
      img: 'AlexKim.JPG',
    },
    {
      name: 'Manun Chopra',
      major: 'ECE ᛫ Full Stack',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Habitant morbi tristique senectus et netus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'phenomanun',
      img: 'ManunChopra.jpg',
    },
    {
      name: 'Elvin Hung',
      major: 'ECE ᛫ Frontend',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Habitant morbi tristique senectus et netus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'elvinhung',
      img: 'ElvinHung.jpg',
    },
    {
      name: 'Rishab Chander',
      major: 'ECE ᛫ Backend',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Habitant morbi tristique senectus et netus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'rchand20',
      img: 'ManunChopra.jpg',
    },
    {
      name: 'Nithanth Ram',
      major: 'ECE ᛫ Backend',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Habitant morbi tristique senectus et netus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'Nithanth',
      img: 'ManunChopra.jpg',
    }
  ];

  const teamStats = {
    commits: 0,
    issues: 0,
    tests: 0,
  };

  const [contributors, setContributors] = useState(teamMembers);
  const [stats, setStats] = useState(teamStats);

  // updates state for team member stats and team stats
  function updateStats(data, type) {
    if (type === 'commits') {
      let commits = 0;
      data.forEach(developer => {
        contributors.forEach(contributor => {
          if (contributor.githubUser === developer.author.login) {
            contributor.commits = developer.total;
            commits += developer.total;
          }
        });
      });
      setStats((prevState) => ({...prevState, commits}));
    } else {
      let issues = 0;
      data.forEach(issue => {
        contributors.forEach(contributor => {
          if (contributor.githubUser === issue.user.login) {
            contributor.issues += 1;
            issues++;
          }
        });
      });
      setStats((prevState) => ({...prevState, issues}));
    }
    setContributors((prevState) => [...contributors]);
  }

  // github api calls for commits and issues
  function getStats() {
    fetch("https://api.github.com/repos/elvinhung/SoftwareLabApp/stats/contributors")
      .then((res) => res.json())
      .then((data) => {
        updateStats(data, 'commits');
      })
      .catch((err) => {
        console.log(err);
      });
    fetch("https://api.github.com/repos/elvinhung/SoftwareLabApp/issues?state=all")
      .then((res) => res.json())
      .then((data) => {
        updateStats(data, 'issues');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // runs upon initial render
  useEffect(() => {
    getStats();
  }, []);

  return(
    <div className="page-container">
      <Header />
      <SectionHeader name="About" />
      <div className="section-body">
        <p>{PURPOSE}</p>
      </div>
      <SectionHeader name="The Team" />
      <div className="member-container">
        <div className="member-section-container">
          {contributors.map(member => {
            return (
              <MemberSection member={member} />
            );
          })}
        </div>
      </div>
      <SectionHeader name="Team Stats" />
      <div className="centered-container">
        <GithubStat type="commits" value={stats.commits} />
        <GithubStat type="issues" value={stats.issues} />
        <GithubStat type="unit tests" value={stats.tests} />
      </div>
      <SectionHeader name="Data" />
      <SectionHeader name="Tools" />
      <div className="centered-container wide">
        <ToolCard
          link="https://aws.amazon.com/"
          usage={AWS_USAGE}
          img="AWS.png"
        />
        <ToolCard
          link="https://reactjs.org/"
          usage={REACT_USAGE}
          img="react.png"
        />
        <ToolCard
          link="https://www.fullstackpython.com/flask.html"
          usage={FLASK_USAGE}
          img="flask.jpg"
        />
      </div>
      <div className="github-logo">
        <a href="https://github.com/elvinhung/SoftwareLabApp" target="_blank">
          <img width="200px" src={require("../assets/github.png")} alt="Github Repository" />
        </a>
      </div>
    </div>
  );
}

export default About;
