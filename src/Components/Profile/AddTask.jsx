import { useTranslation } from "react-i18next";
export default function AddTask() {
  const { t, i18n } = useTranslation();
  return (
    <div className="m-2.5">
      <form action="">
        <div className="text-2xl">{t("addtask.tasktheme")}</div>
        <div>
          <input
            type="text"
            className=" border h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md content"
          />
        </div>
        <div className="text-2xl">{t("addtask.taskcondition")}</div>
        <textarea
          type="text"
          className="taskin border px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md content"
        />
        <div>
          <button className="mt-2 mb-3 bg-indigo-500 text-white py-2 px-6 rounded-lg">
            {t("addtask.taskbut")}
          </button>
        </div>
      </form>
    </div>
  );
}
