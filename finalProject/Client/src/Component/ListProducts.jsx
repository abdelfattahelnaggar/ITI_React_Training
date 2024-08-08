import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import alternateImage from '../Images/product3.jpg';
import ProductDetails from './ProductDetails';
import ProductUpdateForm from './ProductUpdateForm';

const ProductTable = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        const products = await response.json();
        setData(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
      });
      setData(data.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

 

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleShowUpdateModal = (product) => {
    setSelectedProduct(product);
    setShowUpdateModal(true);
  };

  const handleHideUpdateModal = () => {
    setShowUpdateModal(false);
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      await fetch(`http://localhost:3001/products/${updatedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      setData(
        data.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
      );
      setShowUpdateModal(false);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.image || alternateImage}
                  alt={product.productName}
                  style={{ maxWidth: '100px' }}
                />
              </td>
              <td>{product.productName}</td>
              <td>{product.productDesc}</td>
              <td className='justify-content-evenly align-items-center'>
                <Button className='align-self-center align-content-center' variant="danger" onClick={() => handleDelete(product.id)}>
                  Delete
                </Button>
                <Button variant="warning" className="ms-2" onClick={() => handleShowUpdateModal(product)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedProduct && (
        <ProductDetails
          show={showModal}
          onHide={handleHideModal}
          productName={selectedProduct.productName}
          productDesc={selectedProduct.productDesc}
          productImage={selectedProduct.image || alternateImage}
          productPrice={selectedProduct.price}
        />
      )}
      {selectedProduct && (
        <ProductUpdateForm
          show={showUpdateModal}
          onHide={handleHideUpdateModal}
          product={selectedProduct}
          onUpdate={handleUpdateProduct}
        />
      )}
    </>
  );
};

export default ProductTable;