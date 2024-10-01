import { Col } from "react-bootstrap";

const InicioItem = ({ icon, title, children }) => {
  return (
    <Col xl={3}>
      <h2 className="fw-bold text-light text-center d-flex flex-column mb-4">
        <i className={`bi bi-${icon} fs-1`}></i>
        {title}
      </h2>
      <p className="text-light text-center mb-3">{children}</p>
    </Col>
  );
};

export default InicioItem;
