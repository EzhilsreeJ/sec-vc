import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="page-header-section">
        <div className="container">
          <h1>About Saveetha Engineering College</h1>
          <p>Discover our legacy, vision, and commitment to excellence.</p>
        </div>
      </section>

      <section className="content-section section">
        <div className="container">
          <div className="about-content">
            <div className="text-block">
              <h2>Our Legacy and Vision</h2>
              <p>
                Established with a vision to be a leading institution in technical education, Saveetha
                Engineering College has consistently strived for academic rigor, innovative research,
                and holistic student development. We believe in empowering students with the knowledge,
                skills, and values necessary to excel in their chosen careers and contribute positively
                to society.
              </p>
              <p>
                Our commitment extends beyond academics; we foster a vibrant campus environment that
                encourages critical thinking, creativity, and lifelong learning.
              </p>
            </div>
            <div className="image-block">
              <img src="/images/campus_building.jpg" alt="Saveetha Engineering College Campus" />
            </div>
          </div>

          <div className="about-content reverse">
             <div className="text-block">
              <h2>Campus Facilities</h2>
              <p>
                Our sprawling campus boasts state-of-the-art infrastructure including modern classrooms,
                well-equipped laboratories, a comprehensive library, hostels, sports facilities, and
                student support services. These facilities are designed to provide a conducive learning
                environment for our students.
              </p>
              <ul>
                <li>Advanced Research Labs</li>
                <li>Digital Library with vast resources</li>
                <li>Spacious Auditoriums and Seminar Halls</li>
                <li>On-campus Hostels for Boys and Girls</li>
                <li>Extensive Sports Complex</li>
              </ul>
            </div>
            <div className="image-block">
              <img src="/images/library.jpg" alt="Saveetha Engineering College Library" />
            </div>
          </div>

          <div className="about-content">
            <div className="text-block">
              <h2>Our Faculty</h2>
              <p>
                We are proud of our distinguished faculty, comprising experienced academicians and
                researchers who are leaders in their respective fields. They are dedicated to
                mentoring students, guiding them through their academic journey, and inspiring them
                to achieve their full potential.
              </p>
            </div>
             <div className="image-block">
              <img src="/images/faculty_meeting.jpg" alt="Saveetha Engineering College Faculty" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;