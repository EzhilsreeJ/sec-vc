import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1>Welcome to Saveetha Engineering College</h1>
          <p>Nurturing Innovation, Shaping Futures.</p>
          <a href="/admissions" className="cta-button">Apply Now</a>
        </div>
      </section>

      <section className="about-preview section">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Saveetha Engineering College (SEC) is a premier institution dedicated to providing
            quality education and fostering research and innovation. We offer a wide range of
            undergraduate and postgraduate programs in various engineering and technology disciplines.
          </p>
          <a href="/about" className="learn-more-button">Learn More</a>
        </div>
      </section>

      <section className="programs-preview section">
        <div className="container">
          <h2>Our Programs</h2>
          <div className="program-cards">
            <div className="card">
              <h3>Computer Science</h3>
              <p>Cutting-edge curriculum in AI, ML, and Software Engineering.</p>
            </div>
            <div className="card">
              <h3>Mechanical Engineering</h3>
              <p>Focus on Robotics, Design, and Sustainable Technologies.</p>
            </div>
            <div className="card">
              <h3>Electronics & Communication</h3>
              <p>Exploring IoT, VLSI, and Advanced Communication Systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="news-events section">
        <div className="container">
          <h2>Latest News & Events</h2>
          <ul>
            <li>Annual Tech Fest - "Techtonic" announced for October!</li>
            <li>Faculty research paper published in IEEE journal.</li>
            <li>Upcoming Webinar on Renewable Energy - Register Now!</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomePage;