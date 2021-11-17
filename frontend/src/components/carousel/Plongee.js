import React from "react";
import { Carousel } from "react-bootstrap";
import plongee_1 from "../../images/plongee_1.jpg";
import plongee_2 from "../../images/plongee_2.jpg";
import plongee_3 from "../../images/plongee_3.jpg";

function Plongee() {
  return (
    <div className="all_carousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={plongee_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={plongee_2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={plongee_3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Plongee;
