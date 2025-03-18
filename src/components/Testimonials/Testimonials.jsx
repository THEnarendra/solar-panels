import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonials.css';
import images from '../../assets/images/images';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review: "Solars provided excellent service and high-quality solar panels. Highly recommended!",
    image: images.testImg,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Great experience with Solars. Their team is professional and knowledgeable.",
    image: images.testImg,
  },
  {
    id: 3,
    name: "Mike Johnson",
    review: "Switching to solar was the best decision. Thanks, Solars!",
    image: images.testImg,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="testimonials" className="py-5 bg-light">
      <Container>
        <h2 className="text-center section-title" data-aos="fade-up">What Our Customers Say</h2>
        <hr className='product-underline mb-4'/>
        <Row>
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={4} data-aos="fade-up" data-aos-delay={testimonial.id * 100}>
              <Card className="text-center p-3 m-3 testimonial-card">
                <img src={testimonial.image} alt={testimonial.name} className="rounded-circle mx-auto mb-3" width="100" height="100" />
                <Card.Body>
                  <Card.Text className="mb-3">{testimonial.review}</Card.Text>
                  <Card.Title>{testimonial.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;