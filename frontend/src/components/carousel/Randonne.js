import React from "react";
import { Carousel } from "react-bootstrap";
import randonne_1 from "../../images/randonne_1.jpg";
import randonne_2 from "../../images/randonne_2.jpg";
import randonne_3 from "../../images/randonne_3.jpg";

function Randonne() {
  return (
    <div className="all_carousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={randonne_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={randonne_2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={randonne_3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Randonne;
