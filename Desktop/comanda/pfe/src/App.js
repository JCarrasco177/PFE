import NavBarCustom from "./componentes/navbar";
import React from "react";
import { Routes, Route ,} from "react-router-dom";
import Login from "./componentes/login";
import Info from "./componentes/Info";
import About from "./componentes/About";
import Registro from "./componentes/Registro";
import Dashboard from './componentes/Dashboard';
function App() {
  return (
    <>
    <NavBarCustom></NavBarCustom>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="registro" element={<Registro />} />
      <Route path="about" element={<About />} />
      <Route path="info" element={<Info />} />
      <Route path="dashboard" element={<Dashboard />} />
     </Routes>
     </>
    );
}


export default App;