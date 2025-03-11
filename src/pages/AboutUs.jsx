import React from "react";
import "./MainCss/AboutUs.css";
import { FaSolarPanel, FaLeaf, FaBolt, FaGlobe } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import images from "../assets/images/images"; // Import images

const aboutFeatures = [
  {
    id: 1,
    icon: <FaSolarPanel className="about-icon" />,
    title: "High-Quality Solar Panels",
    description: "We provide top-tier, long-lasting solar panels with warranty.",
  },
  {
    id: 2,
    icon: <FaLeaf className="about-icon" />,
    title: "Eco-Friendly Energy",
    description: "Contribute to a greener planet with sustainable energy.",
  },
  {
    id: 3,
    icon: <FaBolt className="about-icon" />,
    title: "Efficient Power Output",
    description: "Get the best performance with high efficiency and durability.",
  },
  {
    id: 4,
    icon: <FaGlobe className="about-icon" />,
    title: "Trusted Globally",
    description: "We are a trusted solar brand with a worldwide presence.",
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <img src={images.solar} alt="About Us" className="hero-image" />
        <div className="hero-overlay">
          <h1 data-aos="fade-up">About Solars</h1>
          <p data-aos="fade-up">Powering the Future with Renewable Energy</p>
        </div>
      </div>

      {/* Company Overview */}
      {/* <Row className="company-overview">
        <Col lg={6} data-aos="fade-right">
          <h2>Who We Are</h2>
          <p>
            Solars is a leading provider of high-quality solar solutions,
            helping homes and businesses transition to clean energy.
          </p>
        </Col>
        <Col lg={6} data-aos="fade-left">
          <img src={images.solar} alt="Solar Panels" className="overview-img" />
        </Col>
      </Row> */}

      {/* Mission & Vision */}
      <Row className="mission-vision">
        <Col md={6} data-aos="fade-up">
          <h2>Our Mission</h2>
          <p>To make clean energy accessible, efficient, and affordable for everyone.</p>
        </Col>
        <Col md={6} data-aos="fade-up">
          <h2>Our Vision</h2>
          <p>Empowering a world where renewable energy powers every home and business.</p>
        </Col>
      </Row>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2 data-aos="fade-up">Why Choose Us?</h2>
        <Row className="features">
          {aboutFeatures.map((feature) => (
            <Col key={feature.id} md={6} lg={3} className="about-feature-item" data-aos="fade-up">
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Col>
          ))}
        </Row>
      </section>

      {/* How We Work */}
      <section className="our-process">
        <h2 data-aos="fade-up" className="section-title" >Our Process</h2>
        <hr className="product-underline mb-4"/>
        <Row className="process-steps">
          <Col md={4} data-aos="fade-up">
            <div className="step">
              <h3>🔧 Installation & Setup</h3>
              <p>Seamless installation by experts ensuring maximum efficiency.</p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up">
            <div className="step">
              <h3>📝 Consultation & Planning</h3>
              <p>Understanding your energy needs and designing the best solution.</p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up">
            <div className="step">
              <h3>⚡ Powering Your Home</h3>
              <p>Enjoy clean, renewable, and cost-effective solar energy for you Home/ Industries.</p>
            </div>
          </Col>
        </Row>
        <hr />
      </section>

      {/* Meet Our Team */}
      <section className="team">
        <h2 data-aos="fade-up" className="section-title">Meet Our Experts</h2>
        <hr className="product-underline"/>
        <br />  
        <Row className="team-members">
          <Col md={6} lg={4} className="team-member" data-aos="fade-up">
            <img src={images.solar} alt="Team Member" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </Col>
          <Col md={6} lg={4} className="team-member" data-aos="fade-up">
            <img src={images.solar} alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Head of Operations</p>
          </Col>
          <Col md={6} lg={4} className="team-member" data-aos="fade-up">
            <img src={images.solar} alt="Team Member" />
            <h3>Amit Kumar</h3>
            <p>Lead Engineer</p>
          </Col>
        </Row>
      </section>

      {/* Customer Testimonials */}
      <section className="testimonials">
        <h2 data-aos="fade-up">What Our Customers Say</h2>
        <Row>
          <Col md={6} data-aos="fade-up">
            <div className="testimonial">
              <p>🌟 "Solars transformed my home with their amazing solar solutions!"</p>
              <p>- Rajesh K.</p>
            </div>
          </Col>
          <Col md={6} data-aos="fade-up">
            <div className="testimonial">
              <p>🌟 "Reliable, efficient, and great service. Highly recommend!"</p>
              <p>- Pooja M.</p>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default AboutUs;
