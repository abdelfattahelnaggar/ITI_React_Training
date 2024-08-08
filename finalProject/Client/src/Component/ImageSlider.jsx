import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstImage from "../Images/slider/men-banner.jpg";
import secondImage from "../Images/slider/slider3.jpg";
export default function ImageSlider() {
  return (

    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-25 img-fluid"
          src={firstImage}
          alt="First slide"
        />
        
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={secondImage}
          alt="Second slide"
        />
      
      </Carousel.Item>
    </Carousel>
  );
}
