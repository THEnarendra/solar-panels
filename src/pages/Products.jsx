import React from "react";
import { Row, Col } from "react-bootstrap";
import "./MainCss/Products.css"; 
import { solarProducts } from "../data/solarProducts"; 

const Products = () => {
  return (
    <>
      <Row className="products-header">
        <Col lg={8} md={10} className="text-center mx-auto">
          <h1 className="products-title">Explore Our Solar Panels</h1>
          <p className="products-description">
            Discover the best solar solutions tailored for your home, office, and industry. 
            Our high-quality solar panels provide efficient energy while ensuring cost savings. 
            Choose the best solar panels for a sustainable future!
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center product-grid">
        {solarProducts.map((product) => (
          <Col lg={3} md={6} sm={12} key={product.id} className="product-col">
            <div className="product-card">
              {/* Discount Badge */}
              <span className="discount-badge">↓ {product.discount}</span>

              {/* Product Image */}
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="hover-overlay">
                  <button className="interested-btn">Interested</button>
                </div>
              </div>

              {/* Product Details */}
              <div className="product-details">
                <p className="product-name">{product.name}</p>
                <p className="product-price">
                  <span className="old-price">{product.oldPrice}</span>
                  <span className="new-price">Starting from {product.newPrice}</span>
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;
