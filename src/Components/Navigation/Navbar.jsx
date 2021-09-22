import "../style.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <div className="nav-item">
          <a href="/">Главная</a>
        </div>
        <div className="nav-item">
          <a href="/profile">Профиль</a>
        </div>
        <div className="nav-item">
          <a href="/task">Задачи</a>
        </div>
      </div>
      <div className="comp">
        Поиск по сайту
        <form action="">
          <input
            type="text"
            className="p-1 bg-gray-200 rounded border border-black"
            placeholder="ключевое слово"
          />
          <button>⌕</button>
        </form>
      </div>
    </div>
  );
};
export default Navbar;
