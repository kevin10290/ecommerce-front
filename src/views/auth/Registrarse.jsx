import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Title from "../../components/common/Title";

const Registrarse = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Para redirigir después del registro

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://ecommerce-api-4jtx.onrender.com/user/register", { // Reemplaza con la URL de tu API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nombre, email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirigir al usuario o mostrar un mensaje de éxito
        navigate("/cuenta"); // Redirige a la página de cuenta o inicio de sesión
      } else {
        // Maneja los errores
        setError(result.message || "Error al registrar el usuario");
      }
    } catch (err) {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid>
      <Title title="Registrarse" />
      <Row className="justify-content-center mb-5" style={{ minHeight: "60vh" }}>
        <Col xl={4}>
          <Form onSubmit={handleSubmit} className="bg-body-secondary rounded-1 my-5 p-5">
            {error && <div className="alert alert-danger">{error}</div>}
            <Form.Label className="fw-semibold text-secondary fs-5 mb-0">
              Nombre*
            </Form.Label>
            <Form.Control
              size="lg"
              className="rounded-1 shadow-none mb-2"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <Form.Label className="fw-semibold text-secondary fs-5 mb-0">
              Correo electrónico*
            </Form.Label>
            <Form.Control
              type="email"
              size="lg"
              className="rounded-1 shadow-none mb-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label className="fw-semibold text-secondary fs-5 mb-0">
              Contraseña*
            </Form.Label>
            <Form.Control
              type="password"
              size="lg"
              className="rounded-1 shadow-none mb-4"
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" size="lg" variant="dark rounded-1 w-100 mb-1" disabled={loading}>
              {loading ? "Registrando..." : "Crear cuenta"}
            </Button>
            <div className="d-flex justify-content-center">
              <Link
                to="/cuenta"
                className="link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover mb-0"
              >
                ¿Ya tienes una cuenta?
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registrarse;
