import { Link } from "react-router-dom";
export default function AuthBut(props) {
  let linkto = "/" + props.link;
  return (
    <div className="hover:text-white cursor-pointer">
      <Link to={linkto}>{props.but}</Link>
    </div>
  );
}
