import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import { AiTwotoneCheckCircle } from "react-icons/ai";

export default function Note({ text, noteId, notes, setNotes }) {
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);
  const [isAllowMove, setIsAllowMove] = useState(false);
  const inputElement = useRef();
  const noteElement = useRef();

  // delete feature
  const handleDelete = () => {
    const newNotes = notes.filter(note => note.id !== noteId);
    setNotes(newNotes);
  };

  // color change feature
  const colors = ["violet", "orange", "#80f280", "yellow"];
  const handleColorChange = color => {
    inputElement.current.style.backgroundColor = `${color}`;
  };

  // movement feature
  const handleMouseDown = e => {
    setIsAllowMove(true);
    // .getBoundingClientRect() gives detail dimentions of the selected dom element
    const dimensions = noteElement.current.getBoundingClientRect();
    setDx(e.clientX - dimensions.x);
    setDy(e.clientY - dimensions.y);
  };

  const handleMouseMove = e => {
    if (isAllowMove) {
      // move the sticky note
      const x = e.clientX - dx;
      const y = e.clientY - dy;

      inputElement.current.style.position = "absolute";
      inputElement.current.style.left = x + "px";
      inputElement.current.style.top = y + "px";
    }
  };

  const handleMouseUp = () => {
    setIsAllowMove(false);
  };

  return (
    <Wrapper ref={noteElement}>
      <div
        className="Note"
        ref={inputElement}
        onMouseDown={e => handleMouseDown(e)}
        onMouseMove={e => handleMouseMove(e)}
        onMouseUp={handleMouseUp}
      >
        <div className="note-header">
          <div className="colors">
            {colors.map(color => (
              <AiTwotoneCheckCircle
                key={color}
                style={{ color: color }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>
          <div className="delete">
            <MdCancel onClick={handleDelete} />
          </div>
        </div>
        <textarea></textarea>
        <h3>{notes[0].date}</h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .Note {
    margin: 2rem;
    background-color: yellow;
    height: 12rem;
    width: 12rem;
    text-align: center;
    box-shadow: 0.2rem 0.2rem 0.5rem #000;
    border-top-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    cursor: move;
  }

  .note-header {
    background-color: #bbb;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 1rem;
    .colors {
      display: flex;
      gap: 0.2rem;
      margin-left: 0.5rem;
      cursor: pointer;
      svg {
        font-size: 1.5rem;
      }
    }
    .delete {
      cursor: pointer;
      svg {
        font-size: 1.5rem;
        margin-right: 0.5rem;
        color: #000;
      }
    }
  }

  textarea {
    margin-top: 1rem;
    height: 7.5rem;
    resize: none;
    border: none;
    outline: none;
    background-color: transparent;
    line-height: 1.2rem;
    color: rgba(0, 0, 0, 0.8);
    text-align: justify;
  }
  h3 {
    margin: 0.2rem;
  }
`;
