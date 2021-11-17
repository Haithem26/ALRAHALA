import React from "react";
import { Carousel } from "react-bootstrap";
import spe_1 from "../../images/spe_1.jpg";
import spe_2 from "../../images/spe_2.jpg";
import spe_3 from "../../images/spe_3.jpg";

function Speleologie() {
  return (
    <div className="all_carousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={spe_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={spe_2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={spe_3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Speleologie;
