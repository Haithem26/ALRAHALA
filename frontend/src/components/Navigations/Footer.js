import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import Iframe from "react-iframe";
const Footer = () => {
  return (
    <div id="footer">
      <Container className="footer_container">
        <Row className="row_1">
          <Col className="col_adress">
            <h3>Nous contacter:</h3>
            <PhoneInTalkRoundedIcon color="success" /> <p>90222895</p>
            <p>alrahala.tn@gmail.com</p>
          </Col>
          <Col className="col_follow">
            <h3>Suivez-nous</h3>

            <div className="wrapper">
              <a
                href="https://www.facebook.com/groups/alrahala"
                target="_blank"
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
          <Col></Col>
        </Row>
        <Row className="row_2">
          <p> @2021 Copyright: Alrahala</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
//https://www.instagram.com/al.rahala.tn/?hl=fr
