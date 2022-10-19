import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg bg-light">
        <Link className="nav-link active" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-link active" to="/resume">
          Resume
        </Link>
        <Link className="nav-link active" to="/contact">
          Contact Me
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
