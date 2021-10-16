import { Average } from "../DatabaseQueries/Querie";
export default function AverageRating(props) {
  return (
    <div>
      <span>Средняя оценка задачи - </span>
      {props.ratings} ⭐
    </div>
  );
}
