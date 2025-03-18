// components/CTABanner.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <section id="cta" className="cta-banner">
      <Container>
        <Row className="align-items-center">
          <Col md={8} data-aos="fade-right">
            <h2 className="cta-title">Ready to Go Solar?</h2>
            <p className="cta-subtitle">
              Contact us today for a free consultation and quote. Start your journey toward renewable energy now!
            </p>
          </Col>
          <Col md={4} className="text-end" data-aos="fade-left">
            <Button variant="light" size="lg" className="cta-button" href="/contact">
              Get Started Now
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTABanner;