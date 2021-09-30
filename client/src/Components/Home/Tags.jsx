import TagButton from "./TagBut";

export default function Tags() {
  return (
    <div className="bg-gray-500 w-1/4 mx-auto my-3 rounded ">
      <TagButton name="математика" />
      <TagButton name="JavaScript" />
      <TagButton name="Логика" />
      <TagButton name="Геометрия" />
      <TagButton name="C#" />
      <div className="bg-gray-600 rounded-b flex justify-center">
        <button className="p-1 m-1.5 bg-gray-700 rounded">
          очистить фильтр
        </button>
      </div>
    </div>
  );
}
