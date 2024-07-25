// React Route Dom
import { Link } from "react-router-dom";

// Icons
import { BiSolidCameraMovie, BiMoviePlay } from "react-icons/bi";
import { MdMovieFilter } from "react-icons/md";
import { GrSearchAdvanced } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <BiSolidCameraMovie /> ReactCine
          </Link>
        </li>
        <li>
          <Link to="/search">
            <GrSearchAdvanced /> Search
          </Link>
        </li>
        <li>
          <Link to="/login">
            {" "}
            <BiMoviePlay /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            {" "}
            <MdMovieFilter /> Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
