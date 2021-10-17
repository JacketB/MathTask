import { useTranslation } from "react-i18next";
export default function AverageRating(props) {
  const { t } = useTranslation();
  return (
    <div>
      <span>{t("average")}</span>
      {props.ratings} ⭐
    </div>
  );
}
