import { useEffect, useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import images from "../../assets/images/images"; // Import the central image file
import "./Hero.css";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row  className="hero-section">
      <Carousel fade>
        {isMobile
          ? images.mobile.map((img, index) => (
              <Carousel.Item key={index}>
                <img src={img} className="hero-image" alt={`Mobile Slide ${index + 1}`} />
              </Carousel.Item>
            ))
          : images.desktop.map((img, index) => (
              <Carousel.Item key={index}>
                <img src={img} className="hero-image" alt={`Desktop Slide ${index + 1}`} />
              </Carousel.Item>
            ))}
      </Carousel>
    </Row>
  );
};

export default Hero;
