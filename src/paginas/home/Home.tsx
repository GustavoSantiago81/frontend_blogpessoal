import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "./Home.css";
import { colors } from "@mui/material";
import { blue } from "@material-ui/core/colors";

function Home() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
            <Paper style={{ height: "100vh", background: "grey" }} />
        </Grid>
        <Grid item container direction="column" sm={4} spacing={2}>
            <Grid item>
                <Paper style={{ height: "49vh", background: "green" }} />
            </Grid>
            <Grid item>
                <Paper style={{ height: "49vh", background: "grey" }} />
            </Grid>

        </Grid>
      </Grid>
    </>
  );
}

export default Home;
