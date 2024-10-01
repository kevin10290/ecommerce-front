import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import Boton from "../common/Boton";

const ConoceTienda = ({ title, button, to }) => {
  return (
    <Col>
      <h1 className="display-4 fw-bold text-secondary text-center mt-5 mb-4">
        {title}
      </h1>
      <div className="d-flex justify-content-center mb-5">
        <Boton as={Link} to={to} size="lg" variant="bg-black text-light mb-5">
          <i className="bi bi-cart-fill me-2"></i>
          {button}
        </Boton>
      </div>
    </Col>
  );
};

export default ConoceTienda;
