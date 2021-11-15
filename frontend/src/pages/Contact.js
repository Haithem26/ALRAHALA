import React from "react";
import Iframe from "react-iframe";
import emailjs from "emailjs-com";

import Icon from "@mui/material/Icon";

import { Fade, Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const Contact = () => {
  const checked = true;
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jjq5rx9",
        "template_e31i25a",
        e.target,
        "user_F9lHas5EdzIWLxl0B6lak"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("msg").style.display = "block";
        },
        (error) => {
          console.log(error.text);
          alert("une erreur s est produite !");
        }
      );
    e.target.reset();
  }

  return (
    <div id="contact">
      <Fade in={checked} {...(checked ? { timeout: 2000 } : {})}>
        <div className="contact-container">
          <div className="container">
            <div>
              <h2>Contact:</h2>
            </div>

            <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Prénom:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Prénom"
                  name="name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Objet:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Objet"
                  name="subject"
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <p className="successMsg" id="msg">
                Message envoyé !
              </p>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "#FDD835",
                  marginTop: 10,
                  float: "right",
                }}
                id="send-btn"
                endIcon={<Icon>send</Icon>}
              >
                Envoyer
              </Button>
            </Form>
          </div>

          <div className="maps">
            <div className="contact_number">
              <ul>
                <li className="contact-list-item_number">
                  <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>{" "}
                  <span>Avenu Habib Bourguiba Beni Khalled</span>{" "}
                </li>
                <li className="contact-list-item_number">
                  <i
                    className="fa fa-phone-square fa-lg"
                    aria-hidden="true"
                  ></i>{" "}
                  <span> Tél : 55 218 722</span>
                </li>
              </ul>
            </div>
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.0780550215203!2d10.589947955848963!3d36.652444537602186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd582769cdfd79%3A0xeb4fc5952bdde507!2sOriental%20Ribbon!5e0!3m2!1sfr!2stn!4v1626941709545!5m2!1sfr!2stn"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
