// src/App.js

// import Provider from react-redux
import { Provider } from "react-redux";

// import store
import store from "./redux/store";
import StudentList from "./components/studentList.js";
import AddStudentForm from "./components/AddStudentForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddStudentForm />
        <hr />
        <StudentList />
      </div>
    </Provider>
  );
}

export default App;
