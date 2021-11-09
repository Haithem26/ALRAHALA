import React, { useContext, useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import logo from "../../images/alrahalalogo.png";
import { login } from "../../services/AuthApi";
import Auth from "../../contexts/Auth";

const SignInForm = ({ history }) => {
  const { setIsAuthenticated } = useContext(Auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const afficherror = document.getElementById("err");

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(user);
      setIsAuthenticated(response);
      console.log(response);
      history.replace("/list-event");
    } catch ({ response }) {
      console.log(response);
      afficherror.innerHTML = response.data.error;
    }
  };

  return (
    <div id="sign-in">
      <Container>
        <Row>
          <div className="signinImg">
            <img src={logo} alt=" logo_rahala"></img>
          </div>
        </Row>
        <Row>
          <div className="signin-form">
            <Form>
              <Form.Group>
                <Form.Text className="title_signin">Connexion</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleSubmit}>
                Se connecter
              </Button>
            </Form>
            <div id="err"> </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SignInForm;
