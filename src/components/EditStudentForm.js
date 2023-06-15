// import hook useState from react to handle form input
import { useState, useEffect } from "react";

// import useDispatch from react-redux
import { useDispatch } from "react-redux";
import { updateStudent } from "../redux/slices/studentSlice";

const EditStudentForm = ({ id, initialNama, initialJurusan, finishEdit }) => {
  console.log({ initialNama });
  const dispatch = useDispatch();

  const [nama, setNama] = useState(initialNama);
  const [jurusan, setJurusan] = useState(initialJurusan);

  // create handleSubmit function
  const handleSubmit = (event) => {
    // prevent default form behavior
    event.preventDefault();

    // create updatedTodo object
    const updatedStudent = {
      id: id,
      nama: nama,
      jurusan: jurusan,
    };

    // dispatch action updateStudent
    dispatch(updateStudent(updatedStudent));
    finishEdit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
      }}
    >
      <label htmlFor="nama">Nama:</label>
      <input
        type="text"
        placeholder="Nama"
        name="nama"
        value={nama}
        onChange={(event) => setNama(event.target.value)}
        required
      />
      <label htmlFor="jurusan">Jurusan:</label>
      <input
        placeholder="Jurusan"
        value={jurusan}
        name="jurusan"
        onChange={(event) => setJurusan(event.target.value)}
        required
      />

      <input type="submit" value="Edit Student" />
    </form>
  );
};

export default EditStudentForm;
