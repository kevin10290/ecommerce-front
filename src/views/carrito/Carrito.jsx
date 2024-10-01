import { useState, useEffect } from "react";
import { Container, Col, Form } from "react-bootstrap";
import Title from "../../components/common/Title";
import Fila from "../../components/common/Fila";
import ProductoList from "../../components/carrito/ProductoList";
import Pedido from "../../components/carrito/Pedido";

const Carrito = () => {
  const [productos, setProductos] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [direccion, setDireccion] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: ""
  });

  useEffect(() => {
    const productsList = JSON.parse(window.localStorage.getItem("productsList"));
    if (productsList) {
      setProductos(productsList);
      const total = productsList.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0);
      setSubtotal(total);
    }
  }, []);

  useEffect(() => {
    const total = productos.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0);
    setSubtotal(total);
  }, [productos]);
  

  const handleAddressChange = (e) => {
    setDireccion({ ...direccion, [e.target.name]: e.target.value });
  };

  return (
    <Container fluid>
      <Title title="Tu carrito" />
      <Container fluid="md">
        <Fila>
          <Col className="mb-5 mb-md-0">
            <ProductoList productos={productos} setProductos={setProductos} />
          </Col>
          <Col md={6} lg={5} xl={4}>
            <h5 className="mt-4 mb-3">Dirección de envío</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Calle</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  placeholder="Calle"
                  value={direccion.street}
                  onChange={handleAddressChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="Ciudad"
                  value={direccion.city}
                  onChange={handleAddressChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Estado</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  placeholder="Estado"
                  value={direccion.state}
                  onChange={handleAddressChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  type="text"
                  name="zipCode"
                  placeholder="Código Postal"
                  value={direccion.zipCode}
                  onChange={handleAddressChange}
                />
              </Form.Group>
            </Form>
            <Pedido
              subtotal={subtotal}
              direccion={direccion}
              productos={productos}
            />
          </Col>
        </Fila>
      </Container>
    </Container>
  );
};

export default Carrito;
