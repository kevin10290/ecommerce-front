import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Table, Modal } from "react-bootstrap";
import Title from "../../components/common/Title";
import {
  fetchProducts,
  fetchCategories,
  addProduct,
  updateProduct,
  deleteProduct,
  addCategory,
  updateCategory,
  deleteCategory,
  fetchOrders // Nueva función para obtener pedidos
} from "./api";
import numberFormat from "../../assets/numberFormat";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]); // Estado para manejar pedidos
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [formProduct, setFormProduct] = useState({
    name: "",
    price: 0,
    description: "",
    stock: 0,
    category: "",
    image: ""
  });
  const [formCategory, setFormCategory] = useState({ name: "" });

  useEffect(() => {
    const loadInitialData = async () => {
      const productsData = await fetchProducts();
      const categoriesData = await fetchCategories();
      const ordersData = await fetchOrders(); // Cargar pedidos
      setProducts(productsData);
      setCategories(categoriesData);
      setOrders(ordersData); // Guardar pedidos en el estado
    };
    loadInitialData();
  }, []);

  const handleProductChange = (e) => {
    setFormProduct({ ...formProduct, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFormCategory({ ...formCategory, [e.target.name]: e.target.value });
  };

  const handleSaveProduct = async () => {
    try {
      if (currentProduct) {
        await updateProduct(currentProduct._id, formProduct);
      } else {
        await addProduct(formProduct);
      }
      setShowProductModal(false);
      const productsData = await fetchProducts();
      setProducts(productsData);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  const handleSaveCategory = async () => {
    try {
      if (currentCategory) {
        await updateCategory(currentCategory._id, formCategory);
      } else {
        await addCategory(formCategory);
      }
      setShowCategoryModal(false);
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error al guardar la categoría:", error);
    }
  };

  return (
    <Container fluid>
      <Title title="Admin - Productos, Categorías y Pedidos" />
      <Row className="my-4">
        <Col md={6}>
          <h4>Productos</h4>
          <Button
            onClick={() => {
              setFormProduct({ name: "", price: 0, description: "", stock: 0, category: "" });
              setCurrentProduct(null);
              setShowProductModal(true);
            }}
            variant="dark"
          >
            Agregar Producto
          </Button>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{numberFormat(product.price)}</td>
                  <td>{product.category.name}</td>
                  <td>
                    <Button
                      onClick={() => {
                        setFormProduct({
                          name: product.name,
                          description: product.description,
                          price: product.price,
                          stock: product.stock,
                          category: product.category._id,
                          image: product.image
                        });
                        setCurrentProduct(product);
                        setShowProductModal(true);
                      }}
                      variant="warning"
                    >
                      Editar
                    </Button>
                    <Button
                      className="ms-2"
                      onClick={async () => {
                        await deleteProduct(product._id);
                        const productsData = await fetchProducts();
                        setProducts(productsData);
                      }}
                      variant="danger"
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        <Col md={6}>
          <h4>Categorías</h4>
          <Button
            onClick={() => {
              setFormCategory({ name: "" });
              setCurrentCategory(null);
              setShowCategoryModal(true);
            }}
            variant="dark"
          >
            Agregar Categoría
          </Button>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id}>
                  <td>{category._id}</td>
                  <td>{category.name}</td>
                  <td>
                    <Button
                      onClick={() => {
                        setFormCategory({ name: category.name });
                        setCurrentCategory(category);
                        setShowCategoryModal(true);
                      }}
                      variant="warning"
                    >
                      Editar
                    </Button>
                    <Button
                      className="ms-2"
                      onClick={async () => {
                        await deleteCategory(category._id);
                        const categoriesData = await fetchCategories();
                        setCategories(categoriesData);
                      }}
                      variant="danger"
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Tabla de Pedidos */}
      <Row>
        <Col md={6}>
          <h4>Pedidos</h4>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>ID Pedido</th>
                <th>Usuario</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user.name}</td>
                  <td>
                    {order.products.map((productItem) => (
                      <div key={productItem.product._id}>{productItem.product.name}</div>
                    ))}
                  </td>
                  <td>
                    {order.products.map((product) => (
                      <div key={product._id}>{product.quantity}</div>
                    ))}
                  </td>
                  <td>${order.total}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={showProductModal} onHide={() => setShowProductModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentProduct ? "Editar Producto" : "Agregar Producto"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formProduct.name}
                onChange={handleProductChange}
              />
            </Form.Group>
            <Form.Group controlId="formProductDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formProduct.description}
                onChange={handleProductChange}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formProduct.price}
                onChange={handleProductChange}
              />
            </Form.Group>
            <Form.Group controlId="formProductStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={formProduct.stock}
                onChange={handleProductChange}
              />
            </Form.Group>
            <Form.Group controlId="formProductImage">
              <Form.Label>Imagen URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={formProduct.image}
                onChange={handleProductChange}
              />
            </Form.Group>
            <Form.Group controlId="formProductCategory">
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={formProduct.category}
                onChange={handleProductChange}
              >
                <option value="">Seleccione una categoría</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowProductModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveProduct}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCategoryModal} onHide={() => setShowCategoryModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentCategory ? "Editar Categoría" : "Agregar Categoría"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCategoryName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formCategory.name}
                onChange={handleCategoryChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCategoryModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveCategory}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminPage;
