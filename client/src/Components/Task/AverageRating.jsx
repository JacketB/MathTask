import { Average } from "../DatabaseQueries/Querie";
export default function AverageRating(props) {
  var grade = 0;
  return (
    <div>
      <span>Средняя оценка задачи - </span>
      {(grade = Average(props.ratings))} ⭐
    </div>
  );
}
