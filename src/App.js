import Header from "./Components/headerFolder/Header";
import "./App.css"
import CreateNote from "./Components/createNoteFolder/CreateNote";
import { useSelector } from "react-redux";
  import { useState } from "react";
function App() {
  const notes=useSelector((state)=>state.createNote)
  const[filterSearch,setFilterSearch]=useState("");

  return (
    <div className="App">

      <Header setFilterSearch={setFilterSearch} filterSearch={filterSearch}/>
      <CreateNote filterSearch={filterSearch}/>
    </div>
  );
}

export default App;
