import { Routes, Route } from "react-router-dom";
import Acountbar from "./components/common/Acountbar";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Inicio from "./views/inicio/Inicio";
import Tienda from "./views/tienda/Tienda";
import Producto from "./views/producto/Producto";
import Contacto from "./views/contacto/Contacto";
import Carrito from "./views/carrito/Carrito";
import Ingresar from "./views/auth/Ingresar";
import Registrarse from "./views/auth/Registrarse";
import AdminPage from "./views/admin/AdminPage";

function App() {
  return (
    <>
      <Acountbar />
      <Navbar />
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/category/:id" element={<Tienda />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/cuenta" element={<Ingresar />} />
        <Route path="/registrarse" element={<Registrarse />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
