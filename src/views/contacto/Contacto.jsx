import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Title from "../../components/common/Title";
import ContactoItem from "../../components/contacto/ContactoItem";
import Formulario from "../../components/contacto/Formulario";

const Contacto = () => {
  return (
    <Container fluid>
      <Title title="Contacto" />
      <Row className="justify-content-center g-4 mt-3 py-5">
        <ContactoItem
          href="https://www.whatsapp.com"
          icon="whatsapp"
          variant="success"
          title="Por WhatsApp"
          description="Estamos disponibles por WhatsApp para responder cualquier inquietud que puedas tener"
          info="+57 300 425 3012"
        />
        <ContactoItem
          href="https://www.gmail.com"
          icon="envelope-at-fill"
          variant="danger"
          title="Por WhatsApp"
          description="Si prefieres, puedes escribirnos a nuestro correo electrónico y con gusto te ayudaremos"
          info="riverbreeze@hotmail.com"
        />
        <ContactoItem
          href="https://www.telefono.com"
          icon="telephone-fill"
          variant="secondary"
          title="Por Telefono"
          description="Puedes hacernos una llamada a través de telefono fijo y de seguro te responderemos"
          info="(572) 486 0773"
        />
      </Row>
      <Row className="bg-black justify-content-center py-5">
        <Col xs={11} sm={8} md={7} lg={6} xl={5} xxl={4}>
          <Formulario />
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
