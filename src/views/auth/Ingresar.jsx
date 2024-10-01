import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Title from "../../components/common/Title";

const Ingresar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://ecommerce-api-4jtx.onrender.com/user/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("userEmail", result.userEmail)
        navigate("/"); // Redirige a la página deseada después del inicio de sesión
        window.location.reload(); // Forzar la recarga de la página para actualizar el estado
      } else {
        setError(result.message || "Error al iniciar sesión");
      }
    } catch (err) {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid>
      <Title title="Iniciar sesión" />
      <Row className="justify-content-center mb-5" style={{ minHeight: "60vh" }}>
        <Col xl={4}>
          <Form onSubmit={handleSubmit} className="bg-body-secondary rounded-1 my-5 p-5">
            {error && <div className="alert alert-danger">{error}</div>}
            <Form.Label className="fw-semibold text-secondary fs-5 mb-0">Correo electrónico*</Form.Label>
            <Form.Control
              type="email"
              size="lg"
              className="rounded-1 shadow-none mb-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label className="fw-semibold text-secondary fs-5 mb-0">Contraseña*</Form.Label>
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
              {loading ? "Iniciando sesión..." : "Entrar"}
            </Button>
            <Button
              as={Link}
              to="/registrarse"
              size="lg"
              variant="outline-dark rounded-1"
            >
              Crear cuenta
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Ingresar;
