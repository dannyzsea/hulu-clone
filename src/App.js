import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import VideoCard from "./components/VideoCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
