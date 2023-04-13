import React from 'react'
import './Login.css'
import { Grid, Typography, TextField } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} alignItems='center' >
                <Box paddingX={6} display='flex' justifyContent='center' >
                    <form>
                        <Typography variant='h3' gutterBottom component='h3' align='center' style={{fontWeight: 'bold'}} >Entrar</Typography>
                        <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none' >
                                <Button type='submit' variant='contained' color='primary' >Logar</Button>
                            </Link>
                        </Box>
                    </form>
                   
                    <Box display='flex' justifyContent='center' marginTop={2} >
                        <Box marginRight={1} >
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight:'bold'}} >Cadastre-se</Typography>
                    </Box>
                </Box>    
            </Grid>
            <Grid xs={6} className='imagemLogin'></Grid>
        </Grid>
    </>
  )
}

export default Login