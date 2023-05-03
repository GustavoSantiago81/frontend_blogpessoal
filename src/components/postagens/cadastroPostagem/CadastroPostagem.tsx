import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Button,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Postagem } from "../../../models/Postagem";
import { useNavigate, useParams } from "react-router-dom";
import { Tema } from "../../../models/Tema";
import useLocalStorage from "react-use-localstorage";
import { getAll, getById, put, post } from "../../../service/Service";

function CadastroPostagem() {
  const history = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]);

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    data: "",
    tema: null,
  });

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

  useEffect(() => {
    if (token === "") {
      alert("sem token não rola");
      history("/login");
    }
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [event.target.name]: event.target.value,
      tema: tema,
    });
  }

  async function getAllTemas() {
    await getAll("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await getById(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getAllTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      try {
        await put("/postagens", postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        alert("Postagem atualizada com sucesso");
        history("/postagens");
      } catch (error) {
        alert("Falha ao atualizar a postagem");
      }
    } else {
      try {
        await post("/postagens", postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        alert("Postagem cadastrada com sucesso");
        history("/postagens");
      } catch (error) {
        alert("Falha ao cadastrar a postagem");
      }
    }
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Cadastrar postagem
        </Typography>
        <TextField
          value={postagem.titulo}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateModel(event)
          }
          id="titulo"
          label="titulo"
          variant="outlined"
          name="titulo"
          margin="normal"
          fullWidth
        />
        <TextField
          value={postagem.texto}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            updateModel(event)
          }
          id="texto"
          label="texto"
          name="texto"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(event) =>
              getById(`/temas/${event.target.value}`, setTema, {
                headers: { Authorization: token },
              })
            }
          >
            {temas.map((tema) => (
              <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={tema.id === 0}
          >
            {tema.id === 0 ? "selecione um tema" : "cadastrar"}
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}

export default CadastroPostagem;
