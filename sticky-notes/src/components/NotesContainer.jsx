import React from "react";
import Note from "./Note";
import styled from "styled-components";

export default function NotesContainer({ notes, setNotes, setNoteText }) {
  return (
    <Wrapper className="NotesContainter">
      <h1>NOTES</h1>
      <div className="notes">
        {notes.map(note => (
          <Note
            key={note.id}
            text={note.text}
            noteId={note.id}
            notes={notes}
            setNotes={setNotes}
            setNoteText={setNoteText}
          />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .notes {
    display: flex;
    flex-wrap: wrap;
  }
  h1 {
    text-align: center;
    width: 80vw;
    padding: 0.5rem;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.3);
    font-size: 2rem;
  }
`;
