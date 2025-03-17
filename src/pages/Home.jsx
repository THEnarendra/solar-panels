import React from 'react'
import './MainCss/Home.css'
import Hero from '../components/Hero/Hero'
import { FaShippingFast, FaHeadset } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Col, Row } from 'react-bootstrap';
import images from "../assets/images/images";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay} from 'swiper/modules';
import {solarProducts} from '../data/solarProducts'
import { Link } from 'react-router-dom';

const imgArray = [
  { id: 1, url: images.slide[0] },
  { id: 2, url: images.slide[1] },
  { id: 3, url: images.slide[2] },
  { id: 4, url: images.slide[3] },
];

const features = [
  {
    id: 1,
    icon: <FaShippingFast className="feature-icon" />,
    title: "Shipping",
    description: "Standard Shipping Charges*",
    animation: "fade-up",
  },
  {
    id: 2,
    icon: <MdVerified className="feature-icon" />,
    title: "EMI",
    description: "EMI Option Available",
    animation: "fade-up",
  },
  {
    id: 3,
    icon: <FaHeadset className="feature-icon" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
    animation: "fade-up",
  },
  {
    id: 4,
    icon: <MdVerified className="feature-icon" />, 
    title: "5+ Years Warranty",
    description: "Reliable Solar Panels with Long-Term Warranty",
    animation: "fade-up",
  }
];

const categories = [
  {
    id: 1,
    name: "Home",
    image: images.slide[0], // Update with actual image path
  },
  {
    id: 2,
    name: "Office",
    image: images.solar, // Update with actual image path
  },
  {
    id: 3,
    name: "Industrial",
    image: images.slide[1], // Update with actual image path
  },
];


const Home = () => {
  return (
    <>
    <Hero/>

{/* Section 2 */}
    <Row className='solar-categories'>
        <div className="text-center mb-4">
          <h2 className="section-title">Solar Categories</h2>
          <hr className='product-underline'/>
          <p className="section-subtitle">Best Solutions for your Home, Office & Industries</p>
        </div>

        <Row className="justify-content-center">
          {categories.map((category) => (
            <Col key={category.id} md={4} sm={6} xs={12} className="category-item" data-aos="fade-up">
              <div className="category-card">
                <img src={category.image} alt={category.name} className="category-image" />
                <div className="category-overlay">
                  <button className="category-btn">{category.name}</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
    </Row>

{/* Section 3 */}
    <Row className="justify-content-center features-container">
          {features.map((feature) => (
            <Col
              key={feature.id}
              lg={3} 
              md={6}  
              sm={12} 
              xs={12} 
              className="feature-item"
              data-aos={feature.animation}
            >
              {feature.icon}
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </Col>
          ))}
    </Row>


{/* Section 4 */}
  <Row className="align-items-center swiper-row">
    <Col lg={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Swiper 
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]} 
            autoplay={{ delay: 3000, disableOnInteraction: false }} 
            className="yourSwiper"
        >
            {imgArray.map((image, index) => ( 
                <SwiperSlide key={index} style={{ display:"flex", justifyContent:"center" }}>
                    <img src={image.url} className='swiperImg' alt={`Slide ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    </Col>

    <Col lg={6} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "4%" }}>
        <h1 className='firsth1'>Power Your Home with Solar Energy</h1><br />
        <h5 style={{color: "gray"}}>
            Reduce electricity costs and contribute to a sustainable future with our premium solar panel solutions. Start your journey toward renewable energy today. We have multiple variation of Solar panels with different KWs. 
        </h5>
    </Col>
  </Row>

{/* Section 5 */}
    <Row className="solar-products-container">
      <h2 className="section-title">Our Solar Products</h2>
      <hr className='product-underline'/>
      <p className="section-subtitle">Most Preferred Solar Products</p>

      <Row className="product-row">
        {solarProducts.map((product) => (
          <Col lg={3} md={6} sm={12} key={product.id} className="product-col">
            <div className="product-card">
              <span className="discount-badge">↓ {product.discount}</span>

              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="hover-overlay">
                  <button className="interested-btn">Interested</button>
                </div>
              </div>

              <div className="product-details">
                {/* <p className="product-name">{product.name}</p> */}
                <Link to={`/solar-panels/${product.id}`} className="product-name-link">
                                  <p className="product-name">{product.name}</p>
                                </Link>
                <p className="product-price">
                  <span className="old-price">{product.oldPrice}</span>
                  <span className="new-price">Starting from {product.newPrice}</span>
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <Link to="/solar-panels" onClick={() => window.scrollTo(0, 0)}>
        <button className="view-all-btn">View All Solars</button>
        </Link>
      </Row>
    </Row>

  </>        
  )
}

export default Home
