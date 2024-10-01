
import { InputGroup, Form, Button } from "react-bootstrap";

const InputCantidad = ({ cantidad, setCantidad }) => {
  const handleMenos = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleMas = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <div style={{ width: "150px" }}>
      <InputGroup>
        <InputGroup.Text className="rounded-start-1 p-0">
          <Button variant="rounded-start-1 rounded-end-0" onClick={handleMenos}>
            <i className="bi bi-dash-lg"></i>
          </Button>
        </InputGroup.Text>
        <Form.Control
          className="text-center shadow-none"
          value={cantidad}
          readOnly
        />
        <InputGroup.Text className="rounded-end-1 p-0">
          <Button variant="rounded-start-0 rounded-end-1" onClick={handleMas}>
            <i className="bi bi-plus-lg"></i>
          </Button>
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default InputCantidad;
