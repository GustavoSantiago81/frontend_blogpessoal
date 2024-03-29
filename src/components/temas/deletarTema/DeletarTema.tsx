import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import useLocalStorage from 'react-use-localstorage';
import { Tema } from '../../../models/Tema'
import { useNavigate, useParams } from 'react-router-dom';
import { getById, deleteById } from '../../../service/Service';

function DeletarTema() {
  const history = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useLocalStorage("token");
  const [tema, setTema] = useState<Tema>();

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

  function sim() {
    history('/temas')
      deleteById(`/temas/${id}`, {
        headers: {
          'Authorization': token
        }
      });
      alert('Tema deletado com sucesso');
    }
  
    function nao() {
      history('/temas')
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
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
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