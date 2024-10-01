import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Acountbar = () => {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail")); 
  const adminEmail = "admin@gmail.com"; 

  // Efecto para escuchar los cambios en el localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setUserId(localStorage.getItem("userId"));
      setUserEmail(localStorage.getItem("userEmail")); 
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    setUserId(null);
    setUserEmail(null);
    window.location.href = "/cuenta";
  };

  return (
    <Container fluid>
      <Row className="bg-black text-light border-bottom py-2 px-3">
        <Col xs="auto" className="ms-auto">
          {userId ? (
            <div className="d-flex gap-2">
              {userEmail === adminEmail && ( 
                <Button
                  as={Link}
                  to="/admin"
                  className="btn-dark btn-outline-success text-white rounded-1 border-0 fw-bold"
                >
                  <i className="bi bi-shield-lock"></i> Administrador
                </Button>
              )}
              <Button
                onClick={handleLogout}
                className="btn-dark btn-outline-danger text-white rounded-1 border-0 fw-bold"
              >
                <i className="bi bi-box-arrow-right"></i> Logout
              </Button>
            </div>
          ) : (
            <Link
              to="/cuenta"
              className="btn btn-outline-light rounded-1 border-0 fw-bold"
            >
              <i className="bi bi-person-fill"></i>
            </Link>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Acountbar;
