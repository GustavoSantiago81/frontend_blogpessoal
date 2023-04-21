import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { getAll } from "../../../service/Service";
import useLocalStorage from "react-use-localstorage";
import { Tema } from '../../../models/Tema'

function ListaTemas() {

  const [temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage('token')
  const history = useNavigate()

  async function getAllTemas() {
    await getAll('/temas', setTemas, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect( () => {
    getAllTemas()
  }, [])

  useEffect(() => {
    if(token === ''){
      alert('Sem token')
      history('/login')
    }
  }, [])

  return (
    <>
      {temas.map((tema) => (
        <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/atualizarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))}
    </>
  );
}

export default ListaTemas;
