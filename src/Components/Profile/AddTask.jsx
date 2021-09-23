export default function addTask() {
  return (
    <div className="m-2.5">
      <form action="">
        <div className="text-2xl">Тема задачи</div>
        <div>
          <input
            type="text"
            className=" border h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md content"
          />
        </div>
        <div className="text-2xl">Условие задачи</div>
        <textarea
          type="text"
          className="taskin border px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md content"
        />
        <div>
          <button className="mt-2 mb-3 bg-indigo-500 text-white py-2 px-6 rounded-lg">
            Добавить задачу
          </button>
        </div>
      </form>
    </div>
  );
}
