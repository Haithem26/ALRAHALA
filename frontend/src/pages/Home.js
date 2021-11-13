import React, { useEffect } from "react";
import logo from "../images/alrahalalogo.png";
import Aos from "aos";

import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="home">
      <div data-aos="fade-down" className="imglogo">
        <img src={logo} alt="bonjour"></img>
      </div>

      <div className="btnHome" data-aos="fade-up">
        <div className="container33">
          <Link to="/services">
            <button type="button" className="button2">
              <span>Nous découvrir</span>
            </button>
          </Link>
          <Link to="/list-event">
            <button type="button" className="button">
              <span>Participer !</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
