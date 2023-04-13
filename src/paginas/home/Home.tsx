import React from "react";
import { Grid, Paper } from '@material-ui/core';
import {Box, Button} from "@mui/material";
import "./Home.css";
import { colors } from "@mui/material";
import { blue } from "@material-ui/core/colors";

function Home() {
    return (
        <>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Titulo</h1>
                    </Box>
                    <Box  display="flex" justifyContent="center" p={2}>
                        <Button>Texto 1</Button>
                        <Button>Texto 2</Button>
                    </Box>
                </Box>
                
            </Paper>
        </>
    );
}

export default Home;
