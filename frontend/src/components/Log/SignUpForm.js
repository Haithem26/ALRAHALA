import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import logo from "../../images/alrahalalogo.png";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const emailError = document.getElementById("err2");
    const passwordError = document.getElementById("err2");
    const passwordConfirmError = document.getElementById("err2");

    passwordConfirmError.innerHTML = "";

    if (password !== controlPassword) {
      passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);

            window.location = "/list-event";
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div id="sign-up">
      <Container className="signinContainer">
        <Row>
          <Col sm={4} className="colImg">
            <div className="signinImg">
              <img src={logo} alt=" logo_rahala"></img>
            </div>{" "}
          </Col>
          <Col sm={8} className="colForm">
            <Form className="signForm">
              <Form.Group className="group_title">
                <Form.Text className="title_signin">INSCRIPTION</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de passe:</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirmer mot de passe:</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  id="password-conf"
                  onChange={(e) => setControlPassword(e.target.value)}
                  value={controlPassword}
                />
              </Form.Group>
              <div id="err2" className="err_text">
                {" "}
              </div>
              <Button variant="primary" onClick={handleRegister}>
                Se connecter
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpForm;
