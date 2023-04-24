import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { Box } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import { Postagem } from '../../../models/Postagem'
import { deleteById, getById } from '../../../service/Service'

function DeletarPostagem() {
  const history = useNavigate()
  const [token, setToken] = useLocalStorage('token')
  const [postagens, setPostagens] = useState<Postagem>()
  const {id} = useParams<{id: string}>()

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
    getById(`/postagens/${id}`, setPostagens, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim(){
    history('/postagens')
    deleteById(`/postagens/${id}`, {
      headers: {
        'Authorization': token
      }
    })
    alert('Postagem deletada com sucesso!')
  }

  function nao(){
    history('/postagens')
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {postagens?.titulo}
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
              <Box>
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

export default DeletarPostagem