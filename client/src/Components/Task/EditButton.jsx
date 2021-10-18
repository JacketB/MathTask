import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

export default function EditButton(props) {
  const { t } = useTranslation();
  let history = useHistory();
  return (
    <div>
      <button
        className="text-white py-2 px-6 rounded-lg"
        onClick={() => {
          history.push(`/update/${props.id}`);
        }}
      >
        {t("taskpage.edit")}
      </button>
    </div>
  );
}
