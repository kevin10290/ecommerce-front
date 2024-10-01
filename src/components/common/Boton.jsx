import { Button } from "react-bootstrap";

const Boton = ({
  as = "button",
  type = "button",
  to,
  size,
  variant,
  onClick,
  children,
}) => {
  return (
    <Button
      as={as}
      type={type}
      to={to}
      size={size}
      variant={" rounded-1 fw-semibold " + variant + " boton-hover"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default Boton;
