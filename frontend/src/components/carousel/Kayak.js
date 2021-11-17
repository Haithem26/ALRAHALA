import React from "react";
import { Carousel } from "react-bootstrap";
import kayak_1 from "../../images/kayak_1.jpg";
import kayak_2 from "../../images/kayak_2.jpg";
import kayak_3 from "../../images/kayak_3.jpg";

function Kayak() {
  return (
    <div className="all_carousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={kayak_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={kayak_2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={kayak_3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Kayak;
