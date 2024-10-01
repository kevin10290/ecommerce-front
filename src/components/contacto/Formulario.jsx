import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form className="bg-body-secondary rounded-1 p-5">
      <Form.Label className="fw-semibold text-secondary fs-5 mb-0">
        Nombre
      </Form.Label>
      <Form.Control size="lg" className="rounded-1 shadow-none mb-2" required />
      <Form.Label className="fw-semibold text-secondary fs-5 mb-0">
        Correo electrónico
      </Form.Label>
      <Form.Control
        type="email"
        size="lg"
        className="rounded-1 shadow-none mb-2"
        required
      />
      <Form.Label className="fw-semibold text-secondary fs-5 mb-0">
        Comentario
      </Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        size="lg"
        className="rounded-1 shadow-none mb-4"
        required
      />
      <Button type="submit" size="lg" variant="dark rounded-1">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;
