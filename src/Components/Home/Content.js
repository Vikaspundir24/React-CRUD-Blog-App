import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Content.css";

function Content({blogs, getBlogId, deleteHandler}) {
  

  return (
    <div className="cards">
      {blogs.map((doc, index) => {
        return (
          <Card key={doc.id} className="content-container">
            <Card.Header><span className="heading">Created By:</span> {doc.createdBy}</Card.Header>
            <Card.Body>
            <Card.Title>{doc.title}</Card.Title>
              <Card.Text>{doc.content}</Card.Text>
              <div className="button">
                <Button variant="info" onClick={(e) => getBlogId(doc.id,  doc.createdBy)}>Edit</Button>
                <Button variant="danger" onClick={(e) => deleteHandler(doc.id , doc.createdBy)}>Delete</Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Content;
