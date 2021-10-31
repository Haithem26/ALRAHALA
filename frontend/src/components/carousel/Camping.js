import React from "react";
import { Carousel } from "react-bootstrap";
import imgcamping1 from '../../images/Camping.jpg';
import imgcamping2 from '../../images/Tyrolienne.jpg';
import imgcamping3 from '../../images/kayak.jpg';

function Camping() {
  return (
    <div className="all_carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgcamping1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgcamping2}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgcamping3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Camping;
