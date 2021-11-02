import React, { useEffect } from "react";
import logo from "../images/alrahalalogo.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="home">
      <div data-aos="fade-down" className="imglogo">
        <img src={logo} alt="bonjour"></img>
      </div>
    </div>
  );
};

export default Home;
