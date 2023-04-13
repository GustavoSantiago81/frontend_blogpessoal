import React from 'react'
import './Login.css'
import { Grid, Typography, TextField } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
        <Grid container alignItems='center'>
            <Grid item xs={6} alignItems='center' >
                <Box display='flex' justifyContent='center' >
                    <form>
                        <Typography>Entrar</Typography>
                        <TextField variant='outlined' label='Usuário' fullWidth />
                        <TextField variant='outlined' label='Senha' fullWidth />
                        <Link to='/home'>
                            <Button variant='contained' color='primary' >Logar</Button>
                        </Link>
                    </form>
                </Box>    
            </Grid>
            <Grid xs={6} className='imagemLogin'>imagens</Grid>
        </Grid>
    </>
  )
}

export default Login