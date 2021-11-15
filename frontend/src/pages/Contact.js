import React from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const Contact = () => {
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
      <Container>
        <Row className="contact_row">
          <Col className="contact_col_1">
            <h2>Contact:</h2>
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
                style={{
                  marginTop: 10,
                  float: "right",
                }}
                variant="contained"
                endIcon={<SendIcon />}
              >
                Envoyer
              </Button>
            </Form>
          </Col>

          <Col className="contact_col_2" fluid></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
