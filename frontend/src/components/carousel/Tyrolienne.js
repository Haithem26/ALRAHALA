import React from "react";
import { Carousel } from "react-bootstrap";
import try_1 from "../../images/try_1.jpg";
import try_2 from "../../images/try_2.jpg";
import try_3 from "../../images/try_3.jpg";

function Tyrolienne() {
  return (
    <div className="all_carousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={try_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={try_2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={try_3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Tyrolienne;
