// components/Partners.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Partners.css';
import images from '../../assets/images/images';
import './Partners.css';

const partners = [
  { id: 1, logo: images.partner, name: "Partner 1" },
  { id: 2, logo: images.partner, name: "Partner 2" },
  { id: 3, logo: images.partner, name: "Partner 3" },
  { id: 4, logo: images.partner, name: "Partner 4" },
];

const Partners = () => {
  return (
    <section id="partners" className="partners-section">
      <Container>
        <h2 className="text-center mb-4" data-aos="fade-up">Our Trusted Partners</h2>
        <Row className="justify-content-center align-items-center">
          {partners.map((partner) => (
            <Col key={partner.id} md={3} sm={6} className="text-center" data-aos="fade-up" data-aos-delay={partner.id * 100}>
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Partners;