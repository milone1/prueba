import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateMovie from "../pages/CreateProduct";
import MovieCrud from "../pages/movieAdmin";

const Router = () => {
    // como esto es un componente tenemos que usar return para poder crear las rutas
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/listar" element={<MovieCrud />} />
            <Route path="/create" element={<CreateMovie />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;