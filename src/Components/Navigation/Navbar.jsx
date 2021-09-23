import { Link } from "react-router-dom";
import "../style.css";
const Navbar = () => {
  return (
    <div className="nav p-3 my-3 shadow-lg  rounded">
      <div>
        <span className="nav-item py-3">
          <Link to="/">Главная</Link>
        </span>
        <span className="nav-item py-3">
          <Link to="/profile">Профиль</Link>
        </span>
      </div>
    </div>
  );
};
export default Navbar;
