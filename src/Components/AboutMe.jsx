import React from "react";
import "./AboutMe.css"; // CSS file for styling

const AboutMe = () => {
  return (
    <div className="about-me container">
      <h1 className="about-me-title">About Me</h1>
      <div className="about-me-content">
        <img
          src="./Images/7.jpg"
          alt="Prisha Das"
          className="about-me-image"
        />
        <div className="about-me-text">
          <p>
            Hello! I'm Prisha Das, a Web Designer and front-end developer with a
            strong passion for creating visually stunning and highly functional
            digital experiences. My expertise lies in the intersection of
            design and technology, where I bring ideas to life by blending
            aesthetics with the latest front-end technologies like HTML, CSS,
            JavaScript, and React.
          </p>
          <p>
            I’ve always been fascinated by the way design can influence human
            interaction, and this fascination led me to a career where I can
            craft websites and applications that are not only beautiful but
            also intuitive and user-friendly. My approach to web design is
            deeply rooted in understanding user behavior and creating interfaces
            that are as enjoyable to use as they are to look at.
          </p>
          <p>
            Throughout my journey, I've had the pleasure of working on a wide
            range of projects, from sleek personal portfolios to complex,
            multi-page websites. Each project is an opportunity to push the
            boundaries of what’s possible, ensuring that the final product is
            both modern and responsive, adapting seamlessly to any device.
          </p>
          <p>
            Beyond my technical skills, I’m also passionate about the creative
            process. I love exploring color theory, typography, and layout
            design to create visually cohesive and compelling websites. When
            I’m not coding or designing, you can find me [hobby or interest],
            which helps me stay creative and balanced.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
