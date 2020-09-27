import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import requests from "./requests";
import "./App.css";
function App() {
  const [selectedByUser, setSelectedByUser] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Nav setSelectedByUser={setSelectedByUser} />
      <Content selectedByUser={selectedByUser} />
    </div>
  );
}

export default App;
