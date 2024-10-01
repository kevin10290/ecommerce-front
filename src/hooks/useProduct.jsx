import { useState, useEffect } from "react";

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);
  const getProducts = async () => {
    await fetch("https://ecommerce-api-4jtx.onrender.com/product/get")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          setProducts(data);
          setError("");
        } else {
          setError("No hay productos");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return [products, error];
};
const useProductByPk = (id) => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState("Cargando...");
  const getProduct = async () => {
    await fetch("https://ecommerce-api-4jtx.onrender.com/product/get/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return [product, error];
};

export { useGetProducts, useProductByPk };
