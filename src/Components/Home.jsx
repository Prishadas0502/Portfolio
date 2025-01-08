import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Designer and Full-Stack Developer</h1>
        <p>I design and code beautifully simple things, and I love what I do.</p>
        <div className="profile-picture">
          <img
            src="./Images/3.jpg" // Replace this with your image link
            alt="Prisha"
            className="profile-img"
          />
          <span className="profile-name">Prisha</span>
        </div>
      </header>
      <section className="home-illustration">
        <img
          src="./Images/8.png" // Replace with your custom illustration
          alt="Illustration"
        />
      </section>
    </div>
  );
}

export default Home;
