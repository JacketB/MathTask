import "../style.css";
import NavItem from "./NavItem";
import { logout } from "../Consts";
const Navbar = () => {
  return (
    <div className="nav p-3 shadow-lg   border-b-2 border-gray-500 flex justify-between">
      <div>
        <NavItem link="/" item="navbar.link1" />
        <NavItem link="/allTasks" item="tasks" />
        {!localStorage.getItem("accessToken") ? (
          <>
            <NavItem link="/login" item="login.logspan" />
            <NavItem link="/register" item="register.regspan" />
          </>
        ) : (
          <>
            {localStorage.getItem("role") != 0 ? (
              <NavItem link="/admin" item="admin" />
            ) : (
              <></>
            )}

            <NavItem
              link={`/profile/${localStorage.getItem("userId")}`}
              item="navbar.link2"
            />
            <span onClick={logout}>
              <NavItem link="/login" item="logout" />
            </span>
          </>
        )}
      </div>
      <div className="inline px-6">{localStorage.getItem("username")}</div>
    </div>
  );
};
export default Navbar;
