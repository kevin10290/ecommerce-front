import { useGetCategorys } from "../../hooks/useCategory";
import { Link } from "react-router-dom";
import NavbarBS from "react-bootstrap/Navbar";
import {
  Container,
  Nav,
  Offcanvas,
  Image,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const Navbar = () => {
  const [categorys, error] = useGetCategorys();
  return (
    <NavbarBS expand="md" className="bg-black shadow pb-3">
      <Container fluid>
        <NavbarBS.Brand as={Link} to="/">
          <Image src="/logo.png" width={180} />
        </NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <NavbarBS.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
          className="bg-black"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
              <Image src="/logo.png" width={180} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link
                to="/tienda"
                className="btn btn-lg btn-outline-light rounded-1 border-0 fw-bold"
              >
                Tienda
              </Link>
              <DropdownButton
                id="dropdown-basic-button"
                size="lg"
                variant="outline-light rounded-1 border-0 fw-bold"
                title="Productos"
              >
                {categorys.map((category, i) => {
                  return (
                    <Dropdown.Item
                      key={i}
                      as={Link}
                      to={`/category/${category._id}`}
                    >
                      {category.name}
                    </Dropdown.Item>
                  );
                })}
              </DropdownButton>
              <Link
                to="/contacto"
                className="btn btn-lg btn-outline-light rounded-1 border-0 fw-bold"
              >
                Contacto
              </Link>
              <Link
                to="/carrito"
                className="btn btn-lg btn-outline-light rounded-1 border-0 fw-bold"
              >
                <i className="bi bi-cart-fill"></i>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </NavbarBS.Offcanvas>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;
