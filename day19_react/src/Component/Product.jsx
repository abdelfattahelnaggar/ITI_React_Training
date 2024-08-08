import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import productImage from '../Images/1.jpg';

function Product(props) {
  let { productName, productDesc } = props;


  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={productImage} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>
          {productDesc}
        </Card.Text>
         <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      
    </Card>
  )
}

export default Product