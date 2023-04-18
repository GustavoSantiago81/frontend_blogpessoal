import React from 'react'
import { Grid, Typography, Button, TextField, Box } from '@mui/material'
import './CadastroUsuario.css'
import { Link } from 'react-router-dom'

function CadastroUsuario(){
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagemCadastro'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                    <Typography
                      variant='h3'
                      gutterBottom
                      color='textPrimary'
                      component='h3'
                      align='center'
                      className='textosCadastrar'>Cadastrar
                      </Typography>
                        <TextField
                          id='nome'
                          label='nome'
                          variant='outlined'
                          name='nome'
                          margin='normal'
                          fullWidth/>

                        <TextField
                          id='usuario'
                          label='usuário'
                          variant='outlined'
                          name='usuario'
                          margin='normal'
                          fullWidth/>

                        <TextField
                          id='senha'
                          label='senha'
                          variant='outlined'
                          name='senha'
                          margin='normal'
                          type='password'fullWidth />

                        <TextField
                          id='confirmarSenha'
                          label='confirmar senha'
                          variant='outlined'
                          name='confirmarSenha'
                          margin='normal'
                          type='password'fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Link
                              to='/login'>
                                <Button
                                  variant='contained'
                                  color='secondary'
                                  className='btnCancelar'
                                  fullWidth>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button variant='contained'
                            color='primary'
                            type='submit'
                            fullWidth >
                                Cadastrar
                            </Button>
                        </Box>
                    </form>

                </Box>
            </Grid>
        </Grid> 
    );
}

export default CadastroUsuario