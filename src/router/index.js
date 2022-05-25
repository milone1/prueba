import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Router = () => {
    // como esto es un componente tenemos que usar return para poder crear las rutas
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;