import { Container, Row, Col, Form } from "react-bootstrap";

import Title from "../../components/common/Title";
import Fila from "../../components/common/Fila";
import Asidebar from "../../components/tienda/Asidebar";
import ProductoList from "../../components/tienda/ProductoList";

const Tienda = () => {
  return (
    <Container fluid>
      <Title title="Tienda" />
      <Container fluid="md">
        <Fila>
          <Asidebar />
          <Col className="ps-4">
            <Row className="mb-5">
              <Col>
                <p className="fs-5">Mostrando 1–60 de 105 resultados</p>
              </Col>
              <Col xs="auto">
                <Form.Select className="bg-body-secondary rounded-1 shadow-none">
                  <option value="">Ordenar por...</option>
                </Form.Select>
              </Col>
            </Row>
            <ProductoList />
          </Col>
        </Fila>
      </Container>
      <Row className="justify-content-center py-5"></Row>
    </Container>
  );
};

export default Tienda;
