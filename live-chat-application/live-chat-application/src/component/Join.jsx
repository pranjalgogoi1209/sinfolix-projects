import React, { useState, useRef } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export let user;

export default function Join() {
  const [name, setName] = useState();

  const inputElement = useRef();
  const sendUser = () => {
    user = inputElement.current.value;
    inputElement.current.value = "";
  };

  return (
    <Wrapper>
      <div className="Join">
        <div className="header">
          <img src={logo} alt="logo" className="logo" />
          <h1>
            Live <br />
            Chat Application
          </h1>
        </div>

        <form>
          <input
            type="text"
            placeholder="Enter Your Name"
            ref={inputElement}
            onChange={e => setName(e.target.value)}
          />
          <Link to={"/chat"} onClick={e => (name ? null : e.preventDefault())}>
            <button type="submit" onClick={sendUser}>
              LogIn
            </button>
          </Link>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .Join {
    border-radius: 1vw;
    width: 50vw;
    background-color: #f1f1f1;
    padding: 2vw;
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2vw;
      border-bottom: 0.15vw solid #faa538;
      padding: 2vw 2vw 4vw 2vw;
      .logo {
        height: 15vw;
      }
      h1 {
        letter-spacing: 0.3vw;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 2vw;
      padding-top: 4vw;
      input {
        font-size: 1.5vw;
        padding: 1vw;
        background-color: #b6efa7;
        border: 0.05vw solid #a4d796;
        border-radius: 1vw;
        outline: transparent;
      }
      a {
        border: 1px solid black;
        background-color: #fbb760;
        text-align: center;
        border: none;
        border-radius: 1vw;
        transition: all 0.1s;
        &:hover {
          background-color: #faa538;
        }
        button {
          width: 100%;
          font-size: 1.5vw;
          padding: 1vw;
          cursor: pointer;
          border: none;
          background-color: transparent;
          font-weight: bold;
          letter-spacing: 0.2vw;
        }
      }
    }
  }
`;
