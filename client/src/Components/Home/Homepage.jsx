import Navbar from "../Navigation/Navbar";
import "../style.css";
import { useTranslation } from "react-i18next";
const Homepage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="content">
      <Navbar />
      <div className="comp">Homepage</div>
    </div>
  );
};
export default Homepage;
