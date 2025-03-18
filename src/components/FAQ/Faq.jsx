// components/FAQ.jsx
import React, { useState } from 'react';
import { Row, Col, Accordion } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQ.css';
import { Container } from 'react-bootstrap';

const faqs = [
  {
    id: 1,
    question: "How do solar panels work?",
    answer: "Solar panels DO convert sunlight into electricity using photovoltaic cells.",
  },
  {
    id: 2,
    question: "What is the lifespan of solar panels?",
    answer: "Most solar panels last 25-30 years with proper maintenance.",
  },
  {
    id: 3,
    question: "Are solar panels worth the investment?",
    answer: "Yes, solar panels can significantly reduce your electricity bills and increase property value.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-5">
        <h2 className="text-center mb-4" data-aos="fade-up">Frequently Asked Questions</h2>
        <Row>
          <Col md={8} className="mx-auto">
            <Accordion>
              {faqs.map((faq) => (
                <Accordion.Item key={faq.id} eventKey={faq.id.toString()} data-aos="fade-up" data-aos-delay={faq.id * 100}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
    </section>
  );
};

export default FAQ;