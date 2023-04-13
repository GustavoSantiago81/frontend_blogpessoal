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

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
      <Login/>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home />
        </Grid>
      </Grid>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
