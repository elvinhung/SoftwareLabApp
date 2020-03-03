import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MemberSection from '../components/MemberSection';
import SectionHeader from "../components/SectionHeader";
import '../styles/About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Kim',
      major: 'ECE ᛫ Frontend',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Habitant morbi tristique senectus et netus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas',
      commits: 0,
      issues: 0,
      githubUser: 'KimchiBean',
      img: 'AlexKim.JPG',
    },
    {
      name: 'Manun Chopra',
      major: 'ECE ᛫ Full Stack',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Habitant morbi tristique senectus et netus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas',
      commits: 0,
      issues: 0,
      githubUser: 'phenomanun',
      img: 'ManunChopra.jpg',
    },
    {
      name: 'Elvin Hung',
      major: 'ECE ᛫ Frontend',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis. Habitant morbi tristique senectus et netus. Faucibus scelerisque eleifend donec pretium vulputate sapien. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas',
      commits: 0,
      issues: 0,
      githubUser: 'elvinhung',
      img: 'ElvinHung.jpg',
    },
    {
      name: 'Rishab Chander',
      major: 'ECE ᛫ Backend',
      bio: '',
      commits: 0,
      issues: 0,
      githubUser: 'rchand20',
      img: '',
    },
    {
      name: 'Nithanth Ram',
      major: 'ECE ᛫ Backend',
      bio: '',
      commits: 0,
      issues: 0,
      githubUser: 'Nithanth',
      img: '',
    }
  ];
  const [contributors, setContributors] = useState(teamMembers);

  function updateTeamMembers(data) {
    data.forEach(developer => {
      contributors.forEach(contributor => {
        if (contributor.githubUser === developer.author.login) {
          contributor.commits = developer.total;
          console.log(contributor.commits);
        }
      });
    });
    setContributors((prevState) => [...contributors]);
  }

  function getContributors() {
    fetch("https://api.github.com/repos/elvinhung/SoftwareLabApp/stats/contributors")
      .then((res) => res.json())
      .then((data) => {
        updateTeamMembers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getContributors();
  }, []);

  return(
    <div className="page-container">
      <Header />
      <SectionHeader name="The Team" />
      <div className="member-section-container">
        {contributors.map(member => {
          return (
            <MemberSection member={member} />
          );
        })}
      </div>
    </div>
  );
}

export default About;
