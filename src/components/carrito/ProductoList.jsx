import { Stack } from "react-bootstrap";
import ProductoItem from "./ProductoItem";
import numberFormat from "../../assets/numberFormat.js"

const ProductoList = ({ productos, setProductos }) => {
  return (
    <Stack>
      {productos.length > 0 ? (
        productos.map((producto) => {
          
          return (
            <ProductoItem
              key={producto.id}
              id={producto.id}
              name={producto.name}
              category={producto.category}
              precio={numberFormat(producto.price)}
              cantidad={producto.cantidad}
              image={producto.image}
              productos={productos}
              setProductos={setProductos}
            />
          );
        })
      ) : (
        <h4>
          <i className="bi bi-info-circle-fill me-2"></i> No hay ningún
          producto.
        </h4>
      )}
    </Stack>
  );
};

export default ProductoList;
