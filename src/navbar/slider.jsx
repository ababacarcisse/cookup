import React from "react";
import { Carousel } from 'react-bootstrap';
import cover from './images/cover.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function ImageSlider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover}
          alt="First slide"
          style={{ maxHeight: '700px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover}
          alt="Second slide"
          style={{ maxHeight: '700px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover}
          alt="Third slide"
          style={{ maxHeight: '700px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
