import Student from "./Student.js";
function StudentList() {
  return (
    <div>
      {Student.map(function (Student) {
        return (
          (<li>{Student.id}</li>),
          (<li> {Student.age}</li>),
          (<li>{Student.name}</li>)
        );
      })}
    </div>
  );
}
export default StudentList;
