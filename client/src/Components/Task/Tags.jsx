export default function Tags(props) {
  let list = new Set();
  props.litsofTasks.map((value) => {
    list.add(value.taskTopic);
  });
  return (
    <div className="bg-gray-500 w-1/4 mx-auto my-3 rounded ">
      <div className="bg-gray-600 rounded-b flex justify-center">
        <button className="p-1 m-1.5 bg-gray-700 rounded">
          очистить фильтр
        </button>
      </div>
    </div>
  );
}
