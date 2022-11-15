import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upper from "./Components/Topside/Upper";
import AddStudent1 from "./Components/Down2/AddStudent1.js";
import AddName from "./Components/Down3/AddName";
import { StudentList } from "./Components/Down1/StudentList";
import EditStudent from "./Components/Down2/EditStudent";
import Titlepic from "./Components/Titlepic/Titlepic";


function App() {

  return (
    <BrowserRouter>
      <div className="field">
        <div className="field1">
          <Upper />
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Titlepic /> }/>
            <Route path="/studentlist" element={<div><StudentList/></div>} />
            <Route path="/add" element={<AddStudent1 />} />
            <Route path="/addname" element={<AddName />} />
            <Route path="/edit/:id" element={<EditStudent /> }/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

