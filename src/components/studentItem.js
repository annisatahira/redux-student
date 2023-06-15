import { deleteStudent } from "../redux/slices/studentSlice";

import { useDispatch } from "react-redux";

function StudentItem({ id, nama, jurusan, handleEdit }) {
  const dispatch = useDispatch();
  // create handleDelete function
  const handleDelete = () => {
    // dispatch action deleteTodo
    dispatch(deleteStudent({ id: id }));
  };
  return (
    <div key={id}>
      <h2>
        - {nama} : {jurusan}{" "}
        <button onClick={() => handleEdit(id)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </h2>
    </div>
  );
}

export default StudentItem;
