import "../style.css";
const Login = () => {
  return (
    <div>
      <div className="  text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl mx-auto text-center">
          <span className="text-2xl font-light text-white">
            Войдите в аккаунт
          </span>
          <div className="relative mt-4 shadow-md sm:rounded-lg text-left content">
            <div className="py-6 px-8">
              <label className="block font-semibold">Email</label>
              <input
                type="text"
                placeholder="Email"
                className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md content"
              />
              <label className="block mt-3 font-semibold">Пароль</label>
              <input
                type="password"
                placeholder="Password"
                className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md content"
              />
              <div className="flex justify-between items-baseline">
                <button className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg">
                  Вход
                </button>
                <a className="px-3 text-sm hover:underline">
                  или создайте аккаунт
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
