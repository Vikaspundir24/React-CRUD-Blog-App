import React from "react";
import Button from "react-bootstrap/Button";
import './Navbar.css'
import Navbar from "react-bootstrap/Navbar";
import { useUserAuth } from "../../Context/UserAuthContext";

function NavbarComponent() {
  let { user, logOut } = useUserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {}
  };
  return (
    <Navbar className="bg-body-tertiary">
      <Navbar.Brand href="#home">Welcome to blog website</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login"> {user.email}</a>
        </Navbar.Text>
        <Button type="submit" variant="outline-primary" onClick={handleLogOut}>
        Logout
      </Button>
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavbarComponent;
