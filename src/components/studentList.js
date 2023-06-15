// import useSelector from react-redux
import { useSelector } from "react-redux";
import StudentItem from "./studentItem.js";
// import hook useState from react for handling showEditForm state
import { useState, useEffect } from "react";
import EditStudentForm from "./EditStudentForm.js";

// create StudentList component
function StudentList() {
  // get students from store
  const students = useSelector((state) => state.students.students);

  const [studentIdEdit, setStudentIdEdit] = useState(null);
  const [studentEditData, setStudentEditData] = useState(null);

  const handleEditStudent = (studentId) => {
    setStudentIdEdit(studentId);
  };

  useEffect(() => {
    if (studentIdEdit) {
      let data = students.filter((student) => student.id === studentIdEdit)[0];
      setStudentEditData(data);
    } else {
      setStudentEditData(null);
    }
  }, [studentIdEdit]);

  return (
    <div>
      <h1>Student List</h1>
      <div>
        {students &&
          students.map((student) => (
            <StudentItem
              key={student.id}
              id={student.id}
              nama={student.nama}
              jurusan={student.jurusan}
              handleEdit={handleEditStudent}
            />
          ))}
      </div>
      <div>
        {studentEditData && (
          <EditStudentForm
            id={studentIdEdit}
            initialNama={studentEditData.nama}
            initialJurusan={studentEditData.jurusan}
            finishEdit={() => setStudentIdEdit(null)}
          />
        )}
      </div>
    </div>
  );
}

export default StudentList;
