import { Image, Stack, CloseButton } from "react-bootstrap";
import InputCantidad from "./InputCantidad";

const ProductoItem = ({
  id,         
  name,        
  category,    
  precio,
  image,
  cantidad,    
  productos,   
  setProductos // Función para actualizar la lista de productos
}) => {
  
  // Función para incrementar la cantidad del producto
  const handleIncrement = () => {
    const updatedProducts = productos.map((producto) => {
      if (producto.id === id) {
        // Incrementa la cantidad del producto específico
        return { ...producto, cantidad: producto.cantidad + 1 };
      }
      return producto; // Devuelve el producto sin cambios
    });
    setProductos(updatedProducts); // Actualiza el estado
    window.localStorage.setItem("productsList", JSON.stringify(updatedProducts)); // Actualiza localStorage
  };

  // Función para decrementar la cantidad del producto
  const handleDecrement = () => {
    const updatedProducts = productos.map((producto) => {
      if (producto.id === id && producto.cantidad > 1) {
        // Decrementa la cantidad solo si es mayor que 1
        return { ...producto, cantidad: producto.cantidad - 1 };
      }
      return producto; // Devuelve el producto sin cambios
    });
    setProductos(updatedProducts); // Actualiza el estado
    window.localStorage.setItem("productsList", JSON.stringify(updatedProducts)); // Actualiza localStorage
  };

  // Función para eliminar el producto
  const handleDelete = () => {
    const updatedProducts = productos.filter((producto) => producto.id !== id);
    setProductos(updatedProducts); // Actualiza el estado
    window.localStorage.setItem("productsList", JSON.stringify(updatedProducts)); // Actualiza localStorage
  };

  // Función para cambiar la cantidad del producto
  const handleCantidadChange = (newCantidad) => {
    const updatedProducts = productos.map((producto) => {
      if (producto.id === id) {
        // Actualiza la cantidad del producto específico
        return { ...producto, cantidad: newCantidad };
      }
      return producto; // Devuelve el producto sin cambios
    });
    setProductos(updatedProducts); // Actualiza el estado
    window.localStorage.setItem("productsList", JSON.stringify(updatedProducts)); // Actualiza localStorage
  };

  return (
    <div className="d-flex border-bottom gap-4 py-4 px-3">
      <Image src={image} width="140px"  alt={name} /> 
      <Stack className="justify-content-center">
        <h5 className="mb-1">{name}</h5>
        <p className="text-secondary">{category}</p> 
        <h5> {precio}</h5> 
        <InputCantidad cantidad={cantidad} setCantidad={handleCantidadChange} /> 
      </Stack>
      <CloseButton onClick={handleDelete} />
    </div>
  );
};

export default ProductoItem;
