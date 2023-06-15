// src/components/AddStudentForm.jsx

// import hook useState from react to handle form input
import { useState } from "react";

// import useDispatch from react-redux
import { useDispatch } from "react-redux";

// import action addStudent
import { addStudent } from "../redux/slices/studentSlice";

const AddStudentForm = () => {
  // create dispatch function using useDispatch
  const dispatch = useDispatch();

  // create input state using useState
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");

  // create handleSubmit function
  const handleSubmit = (event) => {
    // prevent default form behavior
    event.preventDefault();

    // create new todo object
    const newStudent = {
      nama: nama,
      jurusan: jurusan,
    };

    // dispatch action addStudent
    dispatch(addStudent(newStudent));

    // reset form
    setNama("");
    setJurusan("");
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
        }}
      >
        <label htmlFor="nama">nama:</label>
        <input
          type="text"
          placeholder="nama"
          name="nama"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
          required
        />
        <label htmlFor="nama">jurusan:</label>
        <input
          placeholder="jurusan"
          value={jurusan}
          name="jurusan"
          onChange={(event) => setJurusan(event.target.value)}
          required
        />
        <input type="submit" value="Add Student" />
      </form>
    </div>
  );
};

export default AddStudentForm;
