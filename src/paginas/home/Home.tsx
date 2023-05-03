import React, { useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import "./Home.css";
import { colors } from "@mui/material";
import { blue } from "@material-ui/core/colors";
import { red } from "@mui/material/colors";
import TabPostagens from "../../components/postagens/tabPostagens/TabPostagens";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

function Home() {
  const history = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      history("/login");
    }
  }, [token]);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={6}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to={"/postagens"}>
              <Button variant="outlined" className="botao">
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/H88yIo2.png"
            alt=""
            width="500px"
            height="500px"
          />
        </Grid>
        <Grid xs={12} className="postagens"></Grid>

        <Grid xs={12} style={{ backgroundColor: "white" }}>
          <TabPostagens />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
