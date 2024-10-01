import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";

const ProductoItem = ({ id, photo, category, name, price }) => {
  return (
    <Col>
      <div className="d-flex flex-column">
        <Link to={`/producto/${id}`} className="position-relative btn-image">
          <span className="bg-danger rounded-1 text-light small px-2 position-absolute start-0">
            hola
          </span>
          <Image src={photo} width="100%" height="250vh" className="mb-1" />
        </Link>
        <Link
          to="/camiseta"
          className="text-secondary text-decoration-none text-center mb-0"
        >
          {category}
        </Link>
        <Link
          to={`/producto/${id}`}
          className="fw-bold link-dark link-opacity-75 link-opacity-100-hover text-decoration-none text-center fs-5 lh-sm mb-2"
        >
          {name}
        </Link>
        <h5 className="fw-bolder text-center">{price}</h5>
      </div>
    </Col>
  );
};

export default ProductoItem;
