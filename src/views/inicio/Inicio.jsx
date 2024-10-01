import { Container, Row } from "react-bootstrap";
import Carrusel from "../../components/inicio/Carrusel";
import Fila from "../../components/common/Fila";
import InicioItem from "../../components/inicio/InicioItem";
import QuienesSomos from "../../components/inicio/QuienesSomos";
import ConoceTienda from "../../components/inicio/ConoceTienda";

const Inicio = () => {
  return (
    <>
      <Carrusel />
      <Container fluid>
        <Fila variant="bg-black justify-content-center">
          <InicioItem icon="lock-fill" title="Compra segura">
            Tus pagos están gestionados y protegidos por <b>Wompi</b>, el
            desarrollo de Bancolombia para comercios electrónicos.
          </InicioItem>
          <InicioItem icon="star-fill" title="Calidad al mejor precio">
            Productos únicos y de calidad que te van a encantar. Y lo mejor, a
            un precio justo.
          </InicioItem>
          <InicioItem icon="cash-stack" title="Pagos contra entrega">
            Pensamos en tu tranquilidad.{" "}
            <b>Pide en línea y paga en la puerta de tu casa.</b>
          </InicioItem>
        </Fila>
        <Fila variant="justify-content-center">
          <QuienesSomos>
            Somos un <b>emprendimiento Cartagüeño</b> que busca dar un sentido
            positivo a la moda, comunicando a través de ella <b>ideas</b> y{" "}
            <b>pensamientos</b>, honrando a grandes científicos e hitos de la
            humanidad.
            <br />
            <br />
            La <b>ciencia es nuestro pilar y fuente de inspiración</b>, que
            deseamos compartir por medio de nuestros productos.
          </QuienesSomos>
        </Fila>
        <Fila>
          <ConoceTienda
            title="¡Conoce todo lo que tenemos para ti!"
            button="Ir a la tienda"
            to="/tienda"
          />
        </Fila>
      </Container>
    </>
  );
};

export default Inicio;
