import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import data from "./utils/mook";
import ComponentHome from "./components/pages/HomePage/home";

function App() {
  return (
    <div className="App">
      <div className="Container">
      <Routes>
        <Route path="*" element={<h1>404 page a not found</h1>} />
        <Route path="/" element={<ComponentHome />} />
        {data.map(({ path, element, id }) => {
          return <Route key={id} path={path} element={element} />;
        })}
      </Routes>
      <Navbar /></div>
    </div>
  );
}

export default App;
