import "../style.css";
const Navbar = () => {
  return (
    <div className="nav p-3 my-3">
      <div>
        <span className="nav-item">
          <a href="/">Главная</a>
        </span>
        <span className="nav-item">
          <a href="/profile">Профиль</a>
        </span>
        <span className="nav-item">
          <a href="/task">Задачи</a>
        </span>
      </div>
      
    </div>
  );
};
export default Navbar;
