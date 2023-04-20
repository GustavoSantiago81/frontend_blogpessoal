import React, { ChangeEvent, useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Tema } from "../../../models/Tema";
import { cadastrarTema } from "../../../service/Service";

function CadastroTema() {
  const history = useNavigate();
  const [token, setToken] = useLocalStorage("token");

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value,
      //descricao: event.target.value
    });
  }

  useEffect(() => {
    if (token === "") {
      alert("sem token");
      history("/login");
    }
  }, []);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await cadastrarTema("/temas", tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema cadastrado");
    } catch (error) {
      alert("Erro");
    }
  }

  useEffect(() => {
    if (tema.id !== 0) {
      history("/temas");
    }
  }, [tema.id]);

  return (
    <>
      <h2>Cadastrar Tema</h2>
      <form onSubmit={onSubmit}>
        <TextField
          label="Descrição do tema"
          name="descricao"
          value={tema.descricao}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateModel(event)
          }
          required
        />
        <Button type="submit" variant="contained">
          Cadastrar{" "}
        </Button>
      </form>
    </>
  );
}

export default CadastroTema;