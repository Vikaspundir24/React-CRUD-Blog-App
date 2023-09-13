import {Form, Alert} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../Context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="container ">
        <h4>Log in</h4>
        {error && <Alert variant ="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="text-center buttons">
            <Button type="submit" variant="outline-primary">Login With Email</Button>{" "}
            <GoogleButton
              onClick={() => {
                console.log("Google button clicked");
              }}
            />
          </div>
        </Form>
      </div>

      <div className="container-small">
        <p>
          Dont Have an account? <Link to="/signup">Sign Up.</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
