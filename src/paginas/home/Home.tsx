import React from "react";
import { Grid, Paper } from '@material-ui/core';
import {Box, Button} from "@mui/material";
import "./Home.css";
import { colors } from "@mui/material";
import { blue } from "@material-ui/core/colors";
import { red } from "@mui/material/colors"; 

function Home() {
    return (
        <>
            <div className='corFundo'>
                <Paper>
                        <Box p={2} color="grey">
                            <Box color="green" display="flex" justifyContent="center">
                                <h1>Titulo</h1>
                            </Box>
                            <img src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={"100%"} height={"100%"}/>
                            <Box color="black" display="flex" justifyContent="center" p={2}>
                                <Button variant='contained' color="primary">Texto 1</Button>
                                <Button variant="contained" color="secondary">Texto 2</Button>
                            </Box>
                        </Box>
                    
                </Paper>

            </div>
            
        </>
    );
}

export default Home;
