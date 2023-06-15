import { createSlice } from "@reduxjs/toolkit";

const studentInitialState = {
  currentId: 0,
  students: [
    // add default todos
    {
      id: 1,
      nama: "Ali",
      jurusan: "Manajemen",
    },
    {
      id: 2,
      nama: "Rina",
      jurusan: "IT",
    },
    {
      id: 3,
      nama: "Lulu",
      jurusan: "Akuntansi",
    },
  ],
};

const studentSlice = createSlice({
  name: "student",
  initialState: studentInitialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push({
        id: state.currentId + 1,
        nama: action.payload.nama,
        jurusan: action.payload.jurusan,
      });
    },
    updateStudent: (state, action) => {
      const { id, nama, jurusan } = action.payload;
      const student = state.students.find((student) => student.id === id);
      if (student) {
        if (nama) {
          student.nama = nama;
        }
        if (jurusan) {
          student.jurusan = jurusan;
        }
      }
    },
    deleteStudent: (state, action) => {
      const { id } = action.payload;
      const index = state.students.findIndex((student) => student.id === id);
      if (index !== -1) {
        state.students.splice(index, 1);
      }
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } =
  studentSlice.actions;

export default studentSlice.reducer;
