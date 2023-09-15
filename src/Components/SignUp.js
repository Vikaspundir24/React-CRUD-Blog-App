import {Form, Alert} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../Context/UserAuthContext";
import "./SignUp.css"


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useUserAuth();
  const  navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/")
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <div className="app">
      <div className="container ">
        <h4>Sign In</h4>
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
            <Button type="submit" variant="outline-primary">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>

      <div className="container-small">
        <p>
          Already Have an account? <Link to="/">Log In.</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
