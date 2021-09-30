import { Link } from "react-router-dom";
export default function AuthBut(props) {
  let linkto = "/" + props.link;
  return (
    <button>
      <Link to={linkto}>{props.but}</Link>
    </button>
  );
}
