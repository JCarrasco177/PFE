import NavBarCustom from "./componentes/navbar";
import React from "react";
import { Routes, Route ,} from "react-router-dom";
import Login from "./componentes/login";
import Info from "./componentes/Info";
import About from "./componentes/About";
function App() {
  return (
    <>
    <NavBarCustom></NavBarCustom>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route path="info" element={<Info />} />
    </Routes>
     </>
    );
}


export default App;