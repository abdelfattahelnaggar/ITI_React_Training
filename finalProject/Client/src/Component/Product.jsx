import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductDetails from './ProductDetails';

function Product(props) {
  const { productName, productDesc, productImage, productPrice } = props;
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card style={{ width: '16rem' }}>
        <Card.Img src={productImage} variant="top" />
        <Card.Body>
          <Card.Title>{productName}</Card.Title>
          <Card.Text>{productDesc}</Card.Text>
          <Card.Text>Price: ${productPrice}</Card.Text>
          <Button variant="primary" onClick={handleShowModal}>
            Show Product
          </Button>
        </Card.Body>
      </Card>

      <ProductDetails
        show={showModal}
        onHide={handleHideModal}
        productName={productName}
        productDesc={productDesc}
        productImage={productImage}
        productPrice={productPrice}
      />
    </>
  );
}

export default Product;