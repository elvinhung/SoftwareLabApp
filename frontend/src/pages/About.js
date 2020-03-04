import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MemberSection from '../components/MemberSection';
import SectionHeader from "../components/SectionHeader";
import githubPng from '../assets/github.png';
import yelpPng from '../assets/yelp.png';
import amadeusPng from '../assets/amadeus.png';
import geocodeJpg from '../assets/geocode.jpg';
import awsPng from '../assets/AWS.png';
import reactPng from '../assets/react.png';
import flaskJpg from '../assets/flask.jpg';
import alex from '../assets/AlexKim.JPG';
import manun from '../assets/ManunChopra.jpg';
import elvin from '../assets/ElvinHung.jpg';
import nithanth from '../assets/NithanthRam.jpg';
import '../styles/About.css';
import '../styles/GlobalStyles.css';

const PURPOSE = "Nomad is a web application for travelers who want to make the most out of their trip. When travelling to an unfamiliar place, the amount of places to see and things to do can be overwhelming. Nomad provides users the ability to filter and sort through all the noise in order to find the experience they are looking for.";
const FLASK_USAGE = "Our backend will be a RESTful API built with Flask. It will allow our front end to make HTTP Requests to our database.";
const AWS_USAGE = "In order to host our website, we employed the use of AWS S3 for static website hosting."
const REACT_USAGE = "We used React to implement the frontend of our application. It allows us to break up our website into different components and manage states of those components over time."
const HOTEL_API = "https://developers.amadeus.com/self-service/category/hotel";
const LOCATION_API = "https://developers.google.com/maps/documentation/geocoding/start";
const RESTAURANT_API = "https://www.yelp.com/fusion";

const GithubStat = (props) => {
  return (
    <div className="github-stat">
      <h2 align="center">{props.value}</h2>
      <p align="center">{props.type}</p>
    </div>
  );
}

const DataSection = (props) => {
  return (
    <a className="data-link" href={props.link} target="_blank">
      <div className="data-section">
        <div className="data-content">
          <img src={props.img} alt={props.alt} />
          <h4>{props.name}</h4>
        </div>
      </div>
    </a>
  );
}

const ToolCard = (props) => {
  return (
    <a className="tool-link" href={props.link} target="_blank">
      <div className="tool-card">
        <div className="center">
          <img className="tool-img" src={props.img}  alt={props.alt} />
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
      bio: 'I’m Alex! I am currently a junior ECE major at UT Austin with a focus in Software Engineering. Outside of class, I like to make music, work out, and volunteer with UT Lions Club.',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'KimchiBean',
      img: alex,
    },
    {
      name: 'Manun Chopra',
      major: 'ECE ᛫ Full Stack',
      bio: 'Hi, I\'m Manun. I am a senior in the ECE department specializing in Software Engineering. Outside of class, I like to play tennis, going to the gym, play piano, and cook desi foods.',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'phenomanun',
      img: manun,
    },
    {
      name: 'Elvin Hung',
      major: 'ECE ᛫ Frontend',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Habitant morbi tristique senectus et netus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'elvinhung',
      img: elvin,
    },
    {
      name: 'Rishab Chander',
      major: 'ECE ᛫ Backend',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Habitant morbi tristique senectus et netus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'rchand20',
      img: manun,
    },
    {
      name: 'Nithanth Ram',
      major: 'ECE ᛫ Backend',
      bio: 'I’m Nithanth! I am a senior in the ECE department at UT Austin with a focus in Software Engineering. Outside of class, I like to play tennis, workout, play drums, and cook good food.',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'Nithanth',
      img: nithanth,
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
      data.forEach(commit => {
        contributors.forEach(contributor => {
          if (contributor.githubUser === commit.commit.author.name || contributor.name === commit.commit.author.name) {
            contributor.commits += 1;
            commits += 1;
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
            issues += 1;
          }
        });
      });
      setStats((prevState) => ({...prevState, issues}));
    }
    setContributors((prevState) => [...contributors]);
  }

  // github api calls for commits and issues
  function getStats() {
    fetch("https://api.github.com/repos/elvinhung/SoftwareLabApp/commits")
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
      <div className="data-container">
        <div className="data-section-container">
          <DataSection
            img={yelpPng}
            alt="Yelp API"
            name="Yelp Fusion API"
            link={RESTAURANT_API}
          />
          <DataSection
            img={amadeusPng}
            alt="Amadeus API"
            name="Amadeus Hotel API"
            link={HOTEL_API}
          />
          <DataSection
            img={geocodeJpg}
            alt="Google Geocoding API"
            name="Google Geocoding API"
            link={LOCATION_API}
          />
        </div>
      </div>
      <SectionHeader name="Tools" />
      <div className="centered-container wide">
        <ToolCard
          link="https://aws.amazon.com/"
          usage={AWS_USAGE}
          img={awsPng}
          alt="aws"
        />
        <ToolCard
          link="https://reactjs.org/"
          usage={REACT_USAGE}
          img={reactPng}
          alt="react"
        />
        <ToolCard
          link="https://www.fullstackpython.com/flask.html"
          usage={FLASK_USAGE}
          img={flaskJpg}
          alt="flask"
        />
      </div>
      <div className="github-logo">
        <a href="https://github.com/elvinhung/SoftwareLabApp" target="_blank">
          <img width="200px" src={githubPng} alt="Github Repository" />
        </a>
      </div>
    </div>
  );
}

export default About;
