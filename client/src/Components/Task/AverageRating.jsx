import { Average } from "../DatabaseQueries/Querie";
export default function AverageRating(props) {
  var grade = 0;
  function AverageGrade() {
    grade = Average(props.ratings);
    if (isNaN(grade)) {
      return 0;
    } else {
      return grade;
    }
  }
  return (
    <div>
      <span>Средняя оценка задачи - </span>
      {AverageGrade()} ⭐
    </div>
  );
}
