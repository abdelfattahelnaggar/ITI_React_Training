import React, { useEffect, useState } from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Product from './Product';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container className="py-5">
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
              productImage={product.image}
              productPrice={product.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;