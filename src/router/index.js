import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import MovieCrud from "../pages/movieAdmin";

const Router = () => {
    // como esto es un componente tenemos que usar return para poder crear las rutas
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/crud" element={<MovieCrud/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;