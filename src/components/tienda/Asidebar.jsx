import { useGetCategorys } from "../../hooks/useCategory";
import { Col } from "react-bootstrap";
import Asidebutton from "./Asidebutton";

const Asidebar = () => {
  const [categorys, error] = useGetCategorys();
  return (
    <Col sm="auto" className="bg-body-secondary rounded-1 p-5">
      <h5 className="fw-bolder">CATEGORÍAS</h5>
      {!error && categorys.length > 0 ? (
        <ul className="nav flex-column mb-4">
          {categorys.map(category => {
            return <Asidebutton key={category._id} id={category._id}>{category.name}</Asidebutton>
          })}
        </ul>
      ) : (
        <p>{error}</p>
      )}
      <h5 className="fw-bolder">ETIQUETAS</h5>
    </Col>
  );
};

export default Asidebar;
