import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import Iframe from "react-iframe";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
const Footer = () => {
  return (
    <div id="footer">
      <Container className="footer_container">
        <Row className="top_row">
          <Col className="col_adress">
            <div className="top_footer">
              <h3>Nous contacter:</h3>
              <ul>
                <li>
                  <span>
                    <ContactPhoneIcon fontSize="large" />
                  </span>{" "}
                  +216 90 222 895
                </li>
                <li>
                  <span>
                    <EmailIcon fontSize="large" />
                  </span>{" "}
                  alrahala.tn@gmail.com
                </li>
                <li>
                  <span>
                    <RoomIcon fontSize="large" />
                  </span>{" "}
                  Hammam Lif 8056
                </li>
              </ul>
            </div>
            <h3>Nous Suivre:</h3>
            <div className="wrapper">
              <a
                href="https://www.facebook.com/groups/alrahala"
                target="_blank"
                without
                rel="noreferrer"
              >
                <div className="button" id="facebook">
                  <div className="icon" id="ifacebook">
                    {" "}
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  <span>Facebook</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/al.rahala.tn/?hl=fr"
                target="_blank"
                without
                rel="noreferrer"
              >
                <div className="button" id="instagram">
                  <div className="icon" id="iinstagram">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <span>Instagram</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/channel/UCdmCo3RRPBRPl5d6qCi4vkQ/videos"
                target="_blank"
                without
                rel="noreferrer"
              >
                <div className="button" id="youtube">
                  <div className="icon" id="iyoutube">
                    <i className="fab fa-youtube"></i>
                  </div>
                  <span>YouTube</span>
                </div>
              </a>
            </div>
          </Col>

          <Col className="col_map">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.0780550215203!2d10.589947955848963!3d36.652444537602186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd582769cdfd79%3A0xeb4fc5952bdde507!2sOriental%20Ribbon!5e0!3m2!1sfr!2stn!4v1626941709545!5m2!1sfr!2stn"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            />
          </Col>
        </Row>
        <Row className="copyright">
          <p> @2021 Copyright: Alrahala</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
//https://www.instagram.com/al.rahala.tn/?hl=fr
