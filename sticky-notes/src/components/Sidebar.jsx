import React from "react";
import styled from "styled-components";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function Sidebar({ notes, setNotes }) {
  const handleCreate = () => {
    const date = new Date();
    setNotes([
      ...notes,
      {
        text: "",
        id: Date.now(),
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      },
    ]);
  };
  return (
    <Wrapper>
      <div className="sidebar">
        <BsFillPlusCircleFill onClick={handleCreate} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .sidebar {
    color: #000;
    font-size: 2rem;
    margin: 2rem;
    svg {
      cursor: pointer;
    }
  }
`;
