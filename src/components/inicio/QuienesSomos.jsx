import { Col } from "react-bootstrap";

const QuienesSomos = ({ children }) => {
  return (
    <>
      <Col
        xs="auto"
        className="bg-body-secondary rounded-start-1 align-content-center my-5"
      >
        <h1 className="display-1 fw-bold text-black text-end p-5 pe-3">
          ¿Quienes
          <br />
          somos?
        </h1>
      </Col>
      <Col xl={5} className="bg-black rounded-end-1 my-5">
        <p className="text-light fs-5 p-5 ps-3">{children}</p>
      </Col>
    </>
  );
};

export default QuienesSomos;
