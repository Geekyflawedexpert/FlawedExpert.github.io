import React from "react";
import { MagicText } from "./MagicText"; // Adjust the path based on your file structure

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="hero">
          <h1>Welcome to My Portfolio</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Intro Section */}
      <section className="top-section">
        <img
          src="/path/to/profile.jpg"  // Replace with your profile image path
          alt="Profile"
          className="profile-pic"
        />
        <div className="intro-text">
          <h1>Hi, I'm John Doe</h1>
          <p>
            I am a passionate web developer specializing in building interactive and engaging web experiences.
          </p>
          {/* Animated Intro Text */}
          <MagicText text="Let's create something amazing together!" />
        </div>
      </section>

      {/* Other Sections (Skills, Projects, Contact, etc.) can follow */}
    </div>
  );
};

export default HomePage;
