import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import useLocalStorage from 'react-use-localstorage';
import { Tema } from '../../../models/Tema'
import { useNavigate, useParams } from 'react-router-dom';
import { getById } from '../../../service/Service';

function DeletarTema() {

  const { id } = useParams<{ id: string }>();
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
  }, [token]);

  

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    getById(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                tema
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

export default DeletarTema