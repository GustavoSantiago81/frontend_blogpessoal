import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

function ListaTemas() {
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tema
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis molestias necessitatibus officiis dolorem nostrum laborum quas omnis, saepe facere veritatis quis, quos fugiat ex. Ducimus commodi voluptas nisi. Excepturi, doloremque.
            </Typography>

          </CardContent>

          <CardActions>
            <Button color="primary" variant="contained" size="small">Editar</Button>
            <Button color="secondary" size="small">Deletar</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default ListaTemas;
