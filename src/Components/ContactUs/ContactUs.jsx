import{ useEffect } from 'react';
import './ContactUs.css';

const ContactUs = () => {
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
    <div className="contactcontainer">
      <h1 className="contact-main-heading animate"><u>Contact Us</u></h1>
      <div className="info-section animate">
        <div className="info-text">
          <h2 className="contact-sub-heading">General Inquiries:</h2>
          <p>For general questions about our bus tracking system, please contact us at:</p>
          <h2 className="contact-sub-heading">Contact Information:</h2>
          <p>Email: info@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <h2 className="contact-sub-heading">Technical Support:</h2>
          <p>If you encounter any technical issues or need help with the web application, our support team is ready to assist you:</p>
          <p>Email:  support@[yourcollege].edu</p>
          <p>Phone: (123) 456-7890</p>
          <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
        </div>
        <img
          src="/assets/contact-us-img.png"
          alt="Office"
          className="info-image animate"
          width={300}
        />
      </div>
      
      <div className="form-section animate">
        <h2 className="contact-sub-heading" style={{fontSize:'2rem'}}>Get in Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
