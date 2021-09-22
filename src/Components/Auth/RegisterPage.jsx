import "../style.css";
const Register = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl mx-auto text-center">
          <span className="text-2xl font-light">Зарегестрируйтесь</span>
          <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
            <div className="py-6 px-8">
              <label className="block font-semibold">Email</label>
              <input
                type="text"
                placeholder="Email"
                className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
              />
              <label className="block mt-3 font-semibold">Пароль</label>
              <input
                type="password"
                placeholder="Password"
                className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
              />
              <div className="flex justify-between items-baseline">
                <button className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg">
                  Регистрация
                </button>
                <a className="px-3 text-sm hover:underline">
                  или войдите в аккаунт
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
