import { Col } from "react-bootstrap";

const ContactoItem = ({ href, icon, variant, title, description, info }) => {
  return (
    <Col sm={4} lg={3}>
      <div className="d-flex justify-content-center mb-4">
        <a
          href={href}
          target="_Blank"
          className={`btn btn-lg bg-black text-light boton-hover rounded-circle shadow p-3`}
        >
          <i className={`bi bi-${icon} fs-1 px-2`}></i>
        </a>
      </div>
      <h2 className="fw-bold text-center mb-3">{title}</h2>
      <p className="text-center text-secondary mb-3">{description}</p>
      <p className="fw-bolder text-center mb-5">{info}</p>
    </Col>
  );
};

export default ContactoItem;
