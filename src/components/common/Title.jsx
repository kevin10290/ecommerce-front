import { Row, Col } from "react-bootstrap";

const Title = ({ title }) => {
  return (
    <Row className="bg-black pb-4">
      <Col>
        <h1 className="display-5 fw-bold text-light text-center">{title}</h1>
      </Col>
    </Row>
  );
};

export default Title;
