import { useState, useEffect } from 'react';
import './Feature.css';

const Feature = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const featureContent = document.getElementById('feature-content');
      const featurePosition = featureContent.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (featurePosition < screenHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='feature-content' className={isVisible ? 'visible' : ''}>
      <div className="header">
        <h1>Powered by Technology</h1>
      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <h2>Real-Time Location Tracking</h2>
          <p>Track the live location of the school bus in real-time, ensuring parents and school administrators are always informed.</p>
          <img src="/assets//realtime.svg" alt="Supervisor Icon" />
        </div>
        <div className="box red">
          <h2>Geofencing Alerts</h2>
          <p>Receive instant alerts when the bus enters or exits predefined virtual boundaries, providing added safety and security for students.</p>
          <img src="/assets//geofencing.png" alt="Team Builder Icon" />
        </div>
        <div className="box box-down blue">
          <h2>Estimated Time of Arrival</h2>
          <p>Get accurate ETA updates, allowing parents to plan their schedules effectively and ensure students are ready for pickup/drop-off.</p>
          <img src="/assets//estimated.png" alt="Calculator Icon" />
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2>Customizable Notifications</h2>
          <p>Tailor notifications based on preferences, such as arrival at designated stops or unexpected delays, empowering parents with personalized updates for peace of mind.</p>
          <img src="/assets//customizable.svg" alt="Karma Icon" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
