import React from "react";
// import socketId from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Join from "./component/Join";
// const ENDPOINT = "http://localhost:4500/";
// const socket = socketId(ENDPOINT, { transports: ["websocket"] });

export default function App() {
  // socket.on("connect", () => {});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" />
      </Routes>
    </BrowserRouter>
  );
}
