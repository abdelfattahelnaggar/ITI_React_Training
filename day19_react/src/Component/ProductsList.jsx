import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { products } from '../Models/productsList';
import Product  from './Product'

function ProductsList() {
  return (
   <Container fluid className="py-5">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
          {products.map((product) => (
            <Col
              key={product.id}
              className="d-flex justify-content-center"
              style={{ maxWidth: "300px" }}
            >
              <Product
                productName={product.productName}  
                productDesc={product.productDesc}
              />
            </Col> 
          ))}
        </Row>
      </Container> 
  )
}

export default ProductsList