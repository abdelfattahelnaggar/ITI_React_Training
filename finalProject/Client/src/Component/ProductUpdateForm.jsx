import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ProductUpdateForm({ show, onHide, product, onUpdate }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleInputChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedProduct);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="productName"
              value={updatedProduct.productName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              name="productDesc"
              value={updatedProduct.productDesc}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="text"
              name="productImage"
              value={updatedProduct.productImage}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={updatedProduct.price}
              onChange={handleInputChange}
              required
              min="0"
              step="0.01"
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={onHide} className="me-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ProductUpdateForm;