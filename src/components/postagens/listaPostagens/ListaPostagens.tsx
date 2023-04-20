import React, { useState, useEffect } from "react";
import "./ListaPostagens.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { getAll } from "../../../service/Service";
import { Postagem } from "../../../models/Postagem";
import useLocalStorage from "react-use-localstorage";

function ListaPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [token, setToken] = useLocalStorage("token");
  const history = useNavigate()

  async function getAllPostagens() {
    await getAll("/postagens", setPostagens, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect( () => {
    getAllPostagens()
  }, [])

  useEffect(() => {
    if(token === ''){
      alert('Sem token')
      history('/login')
    }
  }, [])

  return (
    <>
      {postagens.map((postagem) => (
        <Box m={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {postagem.titulo}
              </Typography>
              <Typography variant="h5" component="h2">
                {postagem.texto}
              </Typography>
              <Typography variant="body1" component="p">
                {postagem.tema}
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="primary" variant="contained" size="small">
                Editar
              </Button>
              <Button color="secondary" variant="contained" size="small">
                Deletar
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagens;
