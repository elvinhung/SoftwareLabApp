import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MemberSection from '../components/MemberSection';
import SectionHeader from "../components/SectionHeader";
import '../styles/About.css';

const About = () => {
  const purpose = "";
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
      bio: '',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'rchand20',
      img: '',
    },
    {
      name: 'Nithanth Ram',
      major: 'ECE ᛫ Backend',
      bio: '',
      commits: 0,
      issues: 0,
      tests: 0,
      githubUser: 'Nithanth',
      img: '',
    }
  ];

  const teamStats = {
    commits: 0,
    issues: 0,
    tests: 0,
  };

  const [contributors, setContributors] = useState(teamMembers);
  const [stats, setStats] = useState(teamStats);

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

  useEffect(() => {
    getStats();
  }, []);

  return(
    <div className="page-container">
      <Header />
      <SectionHeader name="About" />
      <div className="section-body">
        <p>

        </p>
      </div>
      <SectionHeader name="The Team" />
      <div className="member-section-container">
        {contributors.map(member => {
          return (
            <MemberSection member={member} />
          );
        })}
      </div>
      <SectionHeader name="Team Stats" />
      <div className="team-stats-container">
        <div>{stats.commits} commits {stats.issues} issues</div>
      </div>
    </div>
  );
}

export default About;
