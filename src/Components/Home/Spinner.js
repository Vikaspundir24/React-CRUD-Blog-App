import Spinner from "react-bootstrap/Spinner";
import "./Spinner.css";


function SpinnerLoad() {
  return (
    <div className="spinner">
      <Spinner animation="border" />;
    </div>
  );
}

export default SpinnerLoad;
