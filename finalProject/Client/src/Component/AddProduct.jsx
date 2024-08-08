import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const defaultImage = 'http://localhost:3001/uploads/default-image.jpg'; // Replace with your default image URL

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    productName: '',
    productDesc: '',
    image: defaultImage, // Use default image initially
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    // Display a preview of the selected image
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prevProduct) => ({
          ...prevProduct,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setNewProduct((prevProduct) => ({
        ...prevProduct,
        image: defaultImage,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        productName: newProduct.productName,
        productDesc: newProduct.productDesc,
        image: newProduct.image,
        price: newProduct.price,
      };

      const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Product added successfully');
        setNewProduct({
          productName: '',
          productDesc: '',
          image: defaultImage,
          price: '',
        });
      } else {
        console.error('Error adding product:', response.status);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
      }}
    >
      <div
        style={{
          padding: '2rem',
          boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)',
          borderRadius: '10px',
          backgroundColor: 'white',
        }}
      >
        <h2>Add New Product</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="productName"
              value={newProduct.productName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              required
              step="0.01"
              min="0"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductDescription">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              name="productDesc"
              value={newProduct.productDesc}
              onChange={handleInputChange}
              required
              rows={3}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" name="image" onChange={handleImageChange} />
            <img
              src={newProduct.image}
              alt="Product Preview"
              style={{ marginTop: '1rem', maxWidth: '100px', maxHeight: '100px' }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AddProduct;
