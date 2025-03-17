import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row className="footer-content">
          {/* Company Info */}
          <Col md={4} className="footer-section" data-aos="fade-up">
            <h3>About Solars</h3>
            <p>
              We provide high-quality solar energy solutions for a cleaner, 
              more sustainable future. Power your home with renewable energy today.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="footer-section" data-aos="fade-up">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="footer-section" data-aos="fade-up">
            <h3>Contact Us</h3>
            <p><FaPhone className="footer-icon" /> +91 98765 43210</p>
            <p><FaEnvelope className="footer-icon" /> info@solars.com</p>

            {/* Social Media */}
            <div className="social-icons">
              <a href="https://www.facebook.com/" className="social-icon"><FaFacebookF /></a>
              <a href="https://www.instagram.com/" className="social-icon"><FaInstagram /></a>
              <a href="https://www.linkedin.com/feed/" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>© {new Date().getFullYear()} Solars. All Rights Reserved.</p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
