import React from "react";
import "./MainCss/ContactUs.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import images from "../assets/images/images"; // Import images

const ContactUs = () => {
  return (
    <div className="contact-container">
      
      {/* Header Section with Background Image */}
      <div className="contact-header">
        <div className="overlay">
          <h1 data-aos="fade-up">Contact Us</h1>
          <p data-aos="fade-up">Let's power your world with solar energy</p>
        </div>
      </div>

      {/* Contact Form & Details Section */}
      <Row className="contact-section justify-content-center">
        <Col lg={5} md={6} sm={12} className="contact-info" data-aos="fade-right">
          <h3>Get in Touch</h3>
          <p>We're here to assist you. Reach out to us anytime!</p>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>info@solars.com</span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>123 Solar Street, Jaipur, Rajasthan</span>
          </div>
        </Col>

        <Col lg={6} md={6} sm={12} className="contact-form-container" data-aos="fade-left">
          <h3>Send Us a Message</h3>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
            </Form.Group>

            <Button type="submit" className="submit-btn">
              Send Message
            </Button>
          </Form>
        </Col>

      </Row>
    </div>
  );
};

export default ContactUs;
