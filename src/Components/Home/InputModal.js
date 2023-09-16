import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import BlogDataService from "../../Services/Blog.services";
import { useUserAuth } from "../../Context/UserAuthContext";

function InputModal({
  id,
  setBlogId,
  show,
  handleClose,
  handleShow,
  setLoading,
  typeBlog,
  getBlogs,
}) {
  let { user } = useUserAuth();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const editHandler = async () => {
    try {
      const docSnap = await BlogDataService.getBlog(id);
      setTitle(docSnap.data().title);
      setContent(docSnap.data().content);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    let createdBy = user.email;
    e.preventDefault();
    if (!title || !content) {
      return alert("Enter a blog");
    }
    const newBlog = {
      title,
      content,
      createdBy,
    };
    console.log(newBlog);

    try {
      setLoading(true)
      if (id !== undefined && id !== "") {
        await BlogDataService.updateBlog(id, newBlog);
        setBlogId("");
        alert("Blog Updated successfully");
      } else {
        await BlogDataService.addBlogs(newBlog);
        
      }
    } catch (err) {
      alert(err);
    }
    setTitle("");
    setContent("");
    handleClose();
    getBlogs();
    setLoading(false)
  };

  return (
    <div className="input-modal">
      <Button variant="primary" onClick={handleShow}>
        Add a New Blog
      </Button>
      <Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{typeBlog} Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title of Blog</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  value={title}
                  autoFocus
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Blog Content</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                  rows={3}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              {typeBlog === "New" ? "Save" : "Update"} Blog
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </div>
  );
}

export default InputModal;
