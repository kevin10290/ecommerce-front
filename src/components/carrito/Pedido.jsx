import { useState } from "react";
import { Button, Image, Modal } from "react-bootstrap";
import Boton from "../common/Boton";
import numberFormat from "../../assets/numberFormat";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const Pedido = ({ subtotal, direccion, productos }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false); // Controla el modal

  const handlePayNow = async () => {
    const userId = window.localStorage.getItem("userId");
  
    if (!userId) {
      // Si el usuario no está logueado, muestra el modal
      setShowModal(true);
      return;
    }
  
    try {
      // Registrar la dirección del usuario
      const addressResponse = await fetch(`https://ecommerce-api-4jtx.onrender.com/user/update/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId,
          address: direccion
        })
      });
  
      if (!addressResponse.ok) {
        throw new Error("Error al guardar la dirección");
      }
  
      // Crear el pedido
      const orderData = {
        user: userId,
        products: productos.map((producto) => ({
          product: producto.id,
          quantity: producto.cantidad
        })),
        total: subtotal + 5000, // Incluye el costo de envío
        address: direccion
      };
  
      const orderResponse = await fetch("https://ecommerce-api-4jtx.onrender.com/order/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
      });
  
      if (orderResponse.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Compra realizada!',
          text: 'Tu pedido se ha completado exitosamente.',
          confirmButtonText: 'Aceptar'
        });
        window.localStorage.removeItem("productsList");
        navigate("/tienda"); // Redirige a la tienda
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al realizar el pedido. Inténtalo de nuevo.',
        });
      }
    } catch (error) {
      console.error("Error al realizar el pedido", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al realizar el pedido. Inténtalo de nuevo.',
      });
    }
  };
  

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const redirectToLogin = () => {
    navigate("/cuenta");
  };

  return (
    <>
      <div className="bg-body-secondary rounded-1 p-5">
        <h4 className="fw-bold mb-4">TU PEDIDO</h4>
        <table className="w-100 fs-5 mb-4">
          <tbody>
            <tr className="border-bottom">
              <td>Subtotal</td>
              <td className="text-end">{numberFormat(subtotal)}</td>
            </tr>
            <tr className="border-bottom">
              <td>Envío estimado</td>
              <td className="text-end">{numberFormat(5000)}</td>
            </tr>
            <tr className="fw-semibold fs-4">
              <td>Total</td>
              <td className="text-end">{numberFormat(subtotal + 5000)}</td>
            </tr>
          </tbody>
        </table>
        <Button
          size="lg"
          className="bg-dark  w-100 shadow"
          onClick={handlePayNow} // Llama a la función al hacer clic
        >
          Pagar ahora
        </Button>
      </div>
      <div className="d-flex justify-content-end py-1 pe-1">
        <Image src="/metodos-de-pago.png" width="170px" />
      </div>

      {/* Modal de aviso de login */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Inicia sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Debes estar registrado e iniciar sesión para continuar con la compra.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={redirectToLogin}>
            Ir a login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Pedido;
