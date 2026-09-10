import { useEffect } from 'react';
import './AboutContent.css';

const AboutContent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          element.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Aboutcontainer">
      <h1 className="main-heading-about animate"><u>About Us</u></h1>
      <div className="about-content-container">
        <img
          src="/assets/about-img.svg"
          alt="Hero"
          className="hero-image animate"
        />
        <div className="about-text-container animate">
          <h2 className="about-sub-heading">Introduction</h2>
          <p className="about-content">
          In many educational institutions, managing transportation services
            efficiently poses a significant challenge. The lack of real-time
            tracking and effective management tools often leads to operational
            inefficiencies, safety concerns, and inconvenience for both students
            and administrative staff. To address these challenges, our
            comprehensive college bus tracking and management system is designed
            to streamline transportation services within educational
            institutions.
          </p>
        </div>
      </div>

      <div className="about-content-container">
        <div className="about-text-container animate">
          <h2 className="about-sub-heading">Objectives</h2>
          <p className="about-content">
          Enhance Operational Efficiency: Improve the management of bus
            schedules and routes to ensure timely arrivals and departures.
            Ensure Student Safety: Provide real-time tracking to enhance the
            safety of students using the transportation services. Improve
            Communication: Facilitate timely notifications and alerts to keep
            students, parents, and staff informed about bus schedules and any
            changes.
          </p>
        </div>
        <img
          src="/assets/about3.png"
          alt="Hero"
          className="hero-image animate"
        />
      </div>

      <div className="about-content-container">
        <img
          src="/assets/about2.png"
          alt="Hero"
          className="hero-image animate"
        />
        <div className="about-text-container animate">
          <h2 className="about-sub-heading">Introduction</h2>
          <p className="about-content">
          In many educational institutions, managing transportation services
            efficiently poses a significant challenge. The lack of real-time
            tracking and effective management tools often leads to operational
            inefficiencies, safety concerns, and inconvenience for both students
            and administrative staff. To address these challenges, our
            comprehensive college bus tracking and management system is designed
            to streamline transportation services within educational
            institutions.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutContent;
