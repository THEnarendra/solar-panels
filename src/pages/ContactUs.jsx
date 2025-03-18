import React from "react";
import "./MainCss/ContactUs.css";
import { Row, Col, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import FAQ from "../components/FAQ/FAQ.jsx";

const ContactUs = () => {
  const phoneNumber = "+919876543210"; // Replace with actual number
  const whatsappMessage = "Hello! I'm interested in solar solutions. Please assist me.";

  return (
    <div className="contact-container">
      
      {/* Header Section with Background Image */}
      <div className="contact-header">
        <div className="overlay">
          <h1 data-aos="fade-up">Contact Us</h1>
          <p data-aos="fade-up">Let's power your world with solar energy</p>
        </div>
      </div>
      {/* Contact Details Section */}
      <Row className="contact-section justify-content-center">
        <Col lg={5} md={6} sm={12} className="contact-info" data-aos="fade-right">
          <h3>Get in Touch</h3>
          <p>We're here to assist you. Reach out to us anytime!</p>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>{phoneNumber}</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>info@solars.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>123 Solar Street, Jaipur, Rajasthan</span>
          </div>

          {/* Action Buttons for Call & WhatsApp */}
          <div className="contact-buttons">
            <Button 
              href={`tel:${phoneNumber}`} 
              className="contact-btn call-btn">
              <FaPhoneAlt /> Call Now
            </Button>

            <Button 
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-btn whatsapp-btn">
              <FaWhatsapp /> WhatsApp Us
            </Button>
          </div>
        </Col>
      </Row>

      <Row className="faq-section"></Row>
        <Col md={8} className="mx-auto">
          <FAQ />
        </Col>
    </div>
  );
};

export default ContactUs;
