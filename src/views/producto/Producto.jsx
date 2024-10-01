import { useParams } from "react-router-dom";
import { useState } from "react";
import { useProductByPk } from "../../hooks/useProduct";
import { Container, Col, Image } from "react-bootstrap";
import Title from "../../components/common/Title";
import Fila from "../../components/common/Fila";
import InputCantidad from "../../components/carrito/InputCantidad";
import Boton from "../../components/common/Boton";
import numberFormat from "../../assets/numberFormat";

const Producto = () => {
  const { id } = useParams();
  const [product, error] = useProductByPk(id);
  const [cantidad, setCantidad] = useState(1);
  const handleClick = () => {
    var localStorage = window.localStorage;
    var productsList = JSON.parse(localStorage.getItem("productsList"));
    !productsList && (productsList = []);
    if (productsList.length > 0) {
      var index = false;
      productsList.forEach((product, i) => {
        if (product.id == id) {
          index = i;
        }
      });
      if (index === false) {
        console.log("no existe");
        productsList.push({
          id: product._id,
          name: product.name,
          image: product.image,
          category: product.category.name,
          price: product.price,
          cantidad,
        });
      } else {
        console.log("existe");
        productsList[index].cantidad += cantidad;
      }
    } else {
      productsList.push({
        id: product._id,
        name: product.name,
        image: product.image,
        category: product.category.name,
        price: product.price,
        cantidad,
      });
    }
    localStorage.setItem("productsList", JSON.stringify(productsList));
    window.location.href = "/tienda";
  };
  return (
    <Container fluid>
      <Title title="Producto" />
      <Container fluid="md">
        <Fila>
          <Col xs={5} className="me-auto">
            <Image
              src={product.image}
              className="img-fluid"
            />
          </Col>
          <Col xs={5} className="bg-body-secondary rounded-1 p-5">
            {!error ? (
              <>
                <p className="text-secondary mb-1">{product.category.name}</p>
                <h1 className="fw-bold">{product.name}</h1>
                <h2 className="fw-semibold">{numberFormat(product.price)}</h2>
                <p className="fs-5 mb-5">{product.description}</p>
                <div className="d-flex gap-4">
                  <InputCantidad
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                  />
                  <Boton onClick={handleClick} variant="bg-black text-light">
                    Añadir al carrito
                  </Boton>
                </div>
              </>
            ) : (
              error
            )}
          </Col>
        </Fila>
      </Container>
    </Container>
  );
};

export default Producto;
