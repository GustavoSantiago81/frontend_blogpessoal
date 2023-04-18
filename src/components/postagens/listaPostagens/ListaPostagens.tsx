import React from 'react'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
  } from "@mui/material";

function ListaPostagens() {
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tema
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descriçao
            </Typography>

          </CardContent>

          <CardActions>
            <Button color="primary" variant="contained" size="small">Editar</Button>
            <Button color="secondary" size="small">Deletar</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

export default ListaPostagens