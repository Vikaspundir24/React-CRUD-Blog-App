import React from "react";
import NavbarComponent from "./Home/Navbar";
import Content from "./Home/Content";
import BlogDataService from "../Services/Blog.services";
import { useEffect, useState } from "react";
import SpinnerLoad from "./Home/Spinner";
import { useUserAuth } from "../Context/UserAuthContext";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [typeBlog, setTypeBlog] = useState("New");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    setLoading(true)
    const data = await BlogDataService.getAllBlogs();
    setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false)
  };

  const [blogId, setBlogId] = useState("");

  const getBlogIdHandler = (id, email) => {
    if (user.email === email) {
      console.log(id);
      setBlogId(id);
      setShow(true);
      setTypeBlog("Update");
    } else {
      return alert("Cant Edit Other Users Blog");
    }
  };

  function handleShow() {
    setShow(true);
    setTypeBlog("New");
  }
  const { user } = useUserAuth();

  async function deleteHandler(id, email) {
    if (user.email === email) {
      setLoading(true)
      await BlogDataService.deleteBlog(id);
      getBlogs();
    } else {
      return alert("You Cant Delete Other Users Blogs");
    }
    setLoading(false)
  }

  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <SpinnerLoad />}
      <NavbarComponent
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        getBlogs={getBlogs}
        id={blogId}
        setBlogId={setBlogId}
        typeBlog={typeBlog}
        setTypeBlog={setTypeBlog}
        setLoading = {setLoading}
      />
      <Content
        getBlogs={getBlogs}
        setBlogs={setBlogs}
        blogs={blogs}
        getBlogId={getBlogIdHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default Home;
