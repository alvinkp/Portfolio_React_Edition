import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <nav className="navbar navbar-expand-lg bg-light">
        <Link className="nav-link active fs-3" to="/Portfolio_React_Edition">
          Portfolio
        </Link>
        <Link className="nav-link active fs-3" to="/resume">
          Resume
        </Link>
        <Link className="nav-link active fs-3" to="/contact">
          Contact Me
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
