import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavItem(props) {
  const { t } = useTranslation();
  return (
    <span className="nav-item py-3">
      <Link className="hover:text-white" to={props.link}>
        {t(props.item)}
      </Link>
    </span>
  );
}
