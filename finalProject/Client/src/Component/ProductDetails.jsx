import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ProductDetails({ show, onHide, productName, productDesc, productImage, productPrice }) {
  const handleBuyNow = () => {
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{productName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={productImage} alt={productName} className="d-block mx-auto mb-3" style={{ maxWidth: '100%' }} />
        <p>{productDesc}</p>
        <h4 className="mt-3">Price: ${productPrice}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleBuyNow} className="me-2">
          Buy Now
        </Button>
        <Button variant="secondary" onClick={onHide} className="btn-danger text-light fw-bolder">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductDetails;