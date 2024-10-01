import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <Row className="bg-black py-4 px-5">
        <Col>
          <h4 className="text-light">UBICACIÓN</h4>
          <ul className="text-light mb-0 ps-4">
            <li>Colombia, Cartago Valle</li>
            <li>Cra. 4A norte #22-07</li>
          </ul>
        </Col>
        <Col>
          <div className="d-flex justify-content-center mb-4">
            <Image src="/logo.png" width={150} />
          </div>
          <ul className="nav justify-content-center gap-3">
            <li className="nav-item">
              <a
                href="https://www.whatsapp.com"
                target="_Blank"
                className="btn btn-sm btn-light rounded-circle"
              >
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.facebook.com"
                target="_Blank"
                className="btn btn-sm btn-light rounded-circle"
              >
                <i className="bi bi-facebook fs-5"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.instagram.com"
                target="_Blank"
                className="btn btn-sm btn-light rounded-circle"
              >
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </li>
          </ul>
        </Col>
        <Col>
          <h4 className="text-light text-end">METODOS DE PAGO</h4>
          <p className="text-light text-end mb-0">Cuenta bancaria</p>
          <p className="text-light text-end mb-0">Pago contraentrega</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
