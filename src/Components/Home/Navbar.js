import React from "react";
import Button from "react-bootstrap/Button";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import { useUserAuth } from "../../Context/UserAuthContext";
import InputModal from "./InputModal";

function NavbarComponent({
  getBlogs,
  id,
  setBlogId,
  show,
  handleClose,
  handleShow,
  typeBlog,
  setTypeBlog,
  setLoading
}) {
  let { user, logOut } = useUserAuth();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {}
  };
  return (
    <Navbar className="bg-body-tertiary nav-main">
      <Navbar.Brand href="#home" className="logo">Blogger.com</Navbar.Brand>
      <InputModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        id={id}
        setBlogId={setBlogId}
        typeBlog={typeBlog}
        setTypeBlog={setTypeBlog}
        getBlogs={getBlogs}
        setLoading={setLoading}
      />
      <Button
        variant="outline-primary"
        className="refresh-blogs"
        onClick={getBlogs}
      >
        Refresh Blogs
      </Button>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login"> {user.email}</a>
        </Navbar.Text>
        <Button type="submit" variant="warning" onClick={handleLogOut}>
          Logout
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
