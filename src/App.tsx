import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Grid } from "@material-ui/core";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    
      <Navbar />

      <div>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastrarusuario" element={<CadastroUsuario/>}/>            
        </Routes>
      </div>
 
      <Footer />

    </BrowserRouter>
  );
}

export default App;
