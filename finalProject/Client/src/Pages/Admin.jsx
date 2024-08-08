import React, { useState } from 'react';
import ListProducts from '../Component/ListProducts';
import AddProduct from '../Component/AddProduct';

export default function Admin() {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleShowAddProduct = () => {
    setShowAddProduct(true);
  };

  const handleShowProductTable = () => {
    setShowAddProduct(false);
  };

  return (
    <div>
      <h1 className='text-center justify-content-center'>Product Management</h1>
      <div className="d-flex justify-content-evenly my-4">
        <button
          className={`btn ${showAddProduct ? 'btn-success text-light px-5 fw-bolder py-2 my-0' : 'btn-primary px-4 p-3'}`}
          onClick={handleShowAddProduct}
        >
          Add Product
        </button>
        <button
          className={`btn ${!showAddProduct ? 'btn-success text-light px-5 fw-bolder py-2 my-0' : 'btn-primary px-4 p-3'}`}
          onClick={handleShowProductTable}
        >
          List Products
        </button>
      </div>
      {showAddProduct ? <AddProduct /> : <ListProducts />}
    </div>
  );
}
