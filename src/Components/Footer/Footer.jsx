import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="row primary">
        <div className="column about">
          <h3>PSIT&nbsp;<span>Bus Tracking</span></h3>
          <p>
          Stay informed and plan your journey confidently with our bus tracking web app, providing accurate updates on bus locations and arrival times.
          </p>
          <div className="social">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-youtube-square"></i>
            <i className="fab fa-whatsapp-square"></i>
          </div>
        </div>

        <div className="column links">
          <h3>Some Links</h3>
          <ul>
          <li>
              <a href="#faq">Home</a>
            </li>
            <li>
              <a href="#faq">About</a>
            </li>
            <li>
              <a href="#faq">Contact</a>
            </li>
            <li>
              <a href="#faq">Service</a>
            </li>
            <li>
              <a href="#faq">Team</a>
            </li>
          </ul>
        </div>

        <div className="column links">
          <h3>Some Links</h3>
          <ul>
          <li>
              <a href="#faq">PSIT</a>
            </li>
            <li>
              <a href="#faq">PSIT CHE</a>
            </li>
          </ul>
        </div>

        <div className="column subscribe">
          <h3>Contact Us</h3>
          <div id='sub-btn'>
            <input type="email" placeholder="Your email id here" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
