import React from "react";
import { useParams } from "react-router-dom";
import { solarProducts } from "../data/solarProducts";
import { Row, Col } from "react-bootstrap";
import "./MainCss/ProductDetail.css"; // Add styles

const ProductDetail = () => {
  const { id } = useParams(); 
  const product = solarProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center">Product not found!</h2>;
  }

  return (
    <div className="product-detail-container">
      <Row className="justify-content-center">
        <Col lg={5} md={6} sm={12} className="text-center">
          <img src={product.image} alt={product.name} className="product-image" />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">
            <span className="old-price">{product.oldPrice}</span>  
            <span className="new-price">{product.newPrice}</span>
          </p>
          <button className="buy-now-btn">Buy Now</button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
