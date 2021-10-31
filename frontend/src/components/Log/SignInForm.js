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
    }
  };

  return (
    <div id="sign-in">
      <Container>
        <Row>
          <div className="signinImg">
            <img src={logo}></img>
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
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
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
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SignInForm;
