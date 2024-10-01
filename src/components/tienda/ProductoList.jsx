import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import ProductoItem from "./ProductoItem";
import numberFormat from "../../assets/numberFormat.js";

const ProductoList = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("category")) {
      fetch("https://ecommerce-api-4jtx.onrender.com/product/category/" + id)
        .then((response) => response.json())
        .then((data) => {
          setProductos(data);
        });
    } else {
      fetch("https://ecommerce-api-4jtx.onrender.com/product/get")
        .then((response) => response.json())
        .then((data) => {
          setProductos(data);
        });
    }
  }, [location]);

  return (
    <Row xs={2} lg={3} xl={4}>
      {!error || productos.length > 0
        ? productos.map((producto) => {
            return (
              <ProductoItem
                key={producto._id}
                id={producto._id}
                photo={producto.image}
                category={producto.category.name}
                name={producto.name}
                price={numberFormat(producto.price)}
              />
            );
          })
        : error}
    </Row>
  );
};

export default ProductoList;
