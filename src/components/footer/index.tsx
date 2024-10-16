import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo">
          <img src={""} alt="JVEC Movers Logo" />
          <p>Copyright © 2024 JVEC Movers. All Rights Reserved.</p>
          <button className="quote-button">Free Quote</button>
        </div>

        <div className="footer-section services">
          <h3>SERVICES</h3>
          <p>Residential Moving</p>
          <p>Complete Packing</p>
          <p>Loading and Unloading</p>
          <p>Transportation</p>
          <p>Unpacking Services</p>
          <p>Commercial Moving</p>
          <p>Office and Business Relocations</p>
          <p>Packing and Transportation</p>
          <p>Setup Services</p>
          <h4>Specialty Moves</h4>
          <p>Delicate Items</p>
          <p>Heavy Furniture</p>
          <h4>Cleaning Services</h4>
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
          <div className="social-icons">
            <span>WhatsApp</span>
            <span>Facebook</span>
          </div>
        </div>
      </div>
      <div className="footer-road">
        <div className="road-graphic"></div>
      </div>
    </footer>
  );
};

export default Footer;
