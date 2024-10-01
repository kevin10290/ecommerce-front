import { Link } from "react-router-dom";

const Asidebutton = ({ id, children }) => {
  return (
    <li className="nav-item">
      <Link
        to={`/category/${id}`}
        className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover fs-5"
      >
        {children}
      </Link>
    </li>
  );
};

export default Asidebutton;
