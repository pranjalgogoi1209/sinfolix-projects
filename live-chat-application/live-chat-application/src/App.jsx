import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Join from "./component/Join";
import Chat from "./component/Chat";

export default function App() {
  // socket.on("connect", () => {});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
