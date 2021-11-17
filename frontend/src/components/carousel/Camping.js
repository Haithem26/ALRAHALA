import React from "react";
import { Carousel } from "react-bootstrap";
import camping_1 from "../../images/camping_1.jpg";
import camping_2 from "../../images/camping_2.jpg";
import camping_3 from "../../images/camping_3.jpg";

function Camping() {
  return (
    <div className="all_carousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={camping_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={camping_2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={camping_3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Camping;
