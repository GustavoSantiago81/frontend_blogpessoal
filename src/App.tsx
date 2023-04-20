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
import ListaTemas from "./components/temas/listaTemas/ListaTemas";
import ListaPostagens from "./components/postagens/listaPostagens/ListaPostagens";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import CadastroPostagem from "./components/postagens/cadastroPostagem/CadastroPostagem";

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
            <Route path="/temas" element={<ListaTemas/>}/>            
            <Route path="/postagens" element={<ListaPostagens/>}/>            
            <Route path="/cadastrarTema" element={<CadastroTema/>}/>            
            <Route path="/atualizarTema/:id" element={<CadastroTema/>}/>            
            <Route path="/deletarTema/:id" element={<CadastroTema/>}/>            
            <Route path="/cadastrarPostagem" element={<CadastroPostagem/>}/>            
            <Route path="/atualizarPostagem/:id" element={<CadastroPostagem/>}/>            
            <Route path="/deletarPostagem/:id" element={<CadastroPostagem/>}/>            
        </Routes>
      </div>
 
      <Footer />

    </BrowserRouter>
  );
}

export default App;
