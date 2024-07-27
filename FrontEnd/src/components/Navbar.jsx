// React Route Dom
import { Link } from "react-router-dom";

// Icons
import { BiSolidCameraMovie, BiMoviePlay } from "react-icons/bi";
import { MdMovieFilter } from "react-icons/md";
import { GrSearchAdvanced } from "react-icons/gr";

// Context
import { Context } from "../context/UserContext";
import { useContext } from "react";

// Icons
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const { authenticated, logout } = useContext(Context);

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
        {authenticated ? (
          <li className="logout" onClick={logout}>
            <LuLogOut /> Sair
          </li>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
