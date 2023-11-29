import React, { useEffect } from "react";
import styled from "styled-components";
import { user } from "./Join";
import socketIO from "socket.io-client";
import { Link } from "react-router-dom";
import { IoIosSend } from "react-icons/io";

const ENDPOINT = "http://localhost:4500/";

export default function Chat() {
  const socket = socketIO(ENDPOINT, { transports: ["websocket"] });
  useEffect(() => {
    socket.on("connect", () => {
      alert("connected");
    });
  });

  return (
    <Wrapper>
      <div className="Chat">
        <div className="header">{user}</div>
        <div className="chat-box"></div>
        <div className="input-box">
          <input type="text" />
          <Link to={"#"}>
            <button type="submit">
              <IoIosSend />
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .Chat {
    color: #fff;
    .header {
      height: 10vh;
    }
    .chat-box {
      height: 80vh;
      background-color: #f1f1f1;
    }
    .input-box {
      height: 10vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1vw 0 1vw;
      input {
        font-size: 1.5vw;
        padding: 1vw;
        background-color: #b6efa7;
        border: none;
        border-radius: 1vw;
        outline: transparent;
        width: 92vw;
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fbb760;
        border-radius: 50%;
        transition: all 0.1s;
        &:hover {
          background-color: #faa538;
        }
        button {
          cursor: pointer;
          border: none;
          padding: 0.7vw;
          background-color: transparent;
          svg {
            font-size: 2.3vw;
            transition: all 0.2s;
            &:hover {
              transform: translate(0.5vw, -0.5vw);
            }
          }
        }
      }
    }
  }
`;
