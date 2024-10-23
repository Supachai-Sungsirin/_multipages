import React from 'react';

import './Home.css';

function Home() {
  return (
    <div className="introduction-container fade-in">
      <div className="hero-section"></div>
      
      <div className="introduction">
        <div className="profile-pic-container">
          <img
            src="/_multipages/profile.JPEG"
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <h1 className="intro-title">Supachai Sungsirin</h1>
        <p className="intro-description">
          I'm studying at Sripatum University.
        </p>
        <p className="intro-description">Faculty of Information Technology.</p>
        <p className="intro-description">
          Major: Computer Science and Software Development.
        </p>
      </div>

      <div className="about-me">
        <h2 className="intro-title">About Me</h2>
        <p className="intro-description">
          My name is Supachai Sungsirin. I am a student at Sripatum
          University. I am majoring in Computer Science and Software
          Development. I am 20 years old. I am from Nonthaburi.
          I love coding.
        </p>
      </div>

      <div className="skills-section">
        <h2 className="intro-title">Skills</h2>
        <div className="skills-container">
          <span className="skill-tag web">Web Development</span>
          <span className="skill-tag react">React</span>
          <span className="skill-tag js">JavaScript</span>
          <span className="skill-tag css">CSS</span>
          <span className="skill-tag html">HTML</span>
        </div>
      </div>
    </div>
  );
}

export default Home;