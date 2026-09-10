import { useEffect } from 'react';
import './Services.css';

const Services = () => {
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
    <div className="servicecontainer">
      <h1 className="main-heading-service animate"><u>Our Services</u></h1>
      <div className="service-content-container">
        <img
          src="/assets/service-1.png"
          alt="Hero"
          className="hero-image animate"
        />
        <div className="service-text-container animate">
          <h2 className="service-sub-heading">How It Works</h2>
          <p className="service-content">
          Each bus in our fleet is equipped with a state-of-the-art GPS device, allowing us to constantly monitor the bus location and provide real-time updates to users. Our web application features an intuitive interface where users can easily check the current location of their bus. Simply log in, select your bus, and view its real-time position on the map. Stay informed with our notification system, receiving alerts service bus arrivals, delays, and route changes directly on your phone or computer. Access detailed information service bus routes, including stops and estimated arrival times, allowing you to plan your journey more efficiently with our comprehensive route maps.
          </p>
        </div>
      </div>

      <div className="service-content-container">
        <div className="service-text-container animate">
          <h2 className="service-sub-heading">Benefits</h2>
          <p className="service-content">
          Enjoy the benefits of real-time tracking, knowing exactly where your bus is at any moment. Avoid long waits at the bus stop and plan your time better. Our system enhances safety, ensuring that students are always aware of their bus location, adding an extra layer of security and peace of mind for parents. With precise tracking, buses can maintain better schedules, reducing delays and ensuring timely arrivals and departures. Access our service from any device—whether it is a smartphone, tablet, or computer. Our responsive design ensures a seamless experience across all platforms.
          </p>
        </div>
        <img
          src="/assets/service-2.png"
          alt="Hero"
          className="hero-image animate"
        />
      </div>

    </div>
  );
};

export default Services;
