import React, { useEffect, useState } from "react";
import { NotesContainer, Sidebar } from "./components";

export default function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Sidebar notes={notes} setNotes={setNotes} />
      <NotesContainer notes={notes} setNotes={setNotes} />
    </div>
  );
}
