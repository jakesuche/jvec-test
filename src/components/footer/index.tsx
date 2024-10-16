
import Logo from "../logo";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo">
          <Logo />
          <p>Copyright © 2024 JVEC Movers. All Rights Reserved.</p>
          <p className="book-now highlight">Book Now - Schedule Your Move</p>
          <button className="btn btn-primary">Free Quote</button>
        </div>

        <div className="footer-section services">
          <h3>SERVICES</h3>
          <p className="highlight">Residential Moving</p>
          <p>Complete Packing</p>
          <p>Loading and Unloading</p>
          <p>Transportation</p>
          <p>Unpacking Services</p>
          <p>Commercial Moving</p>
          <p>Office and Business Relocations</p>
          <p>Packing and Transportation</p>
          <p>Setup Services</p>
          <p className="highlight">Specialty Moves</p>
          <p>Delicate Items</p>
          <p>Heavy Furniture</p>
          <p>Cleaning Services</p>
          <p>Post-Move Cleaning</p>
        </div>

        <div className="footer-section quick-links">
          <h3>QUICK LINKS</h3>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Blog</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>SiteMaps</p>
        </div>

        <div className="footer-section contact">
          <h3>CONTACT US</h3>
          <p>
            12 Rev. Oguniyi Street, off Oba Akinjobi, Ikeja GRA, Lagos, Nigeria.
          </p>
          <p>
            Phone: <a href="tel:+234-0814-097-9054">+234-0814-097-9054</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:hello@jvecmovers.com">hello@jvecmovers.com</a>
          </p>
          <h3>FOLLOW US</h3>
          <p className="stay-connected">
            Stay connected with us on social media for updates and promotions.
          </p>
          <div className="social-icons">
            <div className="flex">
              <img src="/images/svg/whatsapp-icon.svg" alt="" />
              <span>WhatsApp</span>
            </div>
            <div className="flex">
              <img src="/images/svg/facebook-icon.svg" alt="" />
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </div>
      <div className="road-track">
        <img
          src="/images/road-track-red.png"
          alt="/images/road-track-red.png"
        />
      </div>
    </footer>
  );
      
};

export default Footer;
