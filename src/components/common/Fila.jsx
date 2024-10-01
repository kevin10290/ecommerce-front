import { Row } from "react-bootstrap";

const Fila = ({ variant, style, children }) => {
  return (
    <Row className={"my-5 py-4 " + variant} style={style}>
      {children}
    </Row>
  );
};

export default Fila;
