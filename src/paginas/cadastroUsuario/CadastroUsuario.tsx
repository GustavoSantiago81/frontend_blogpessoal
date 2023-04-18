import React, {ChangeEvent, useEffect, useState} from 'react'
import { Grid, Typography, Button, TextField, Box } from '@mui/material'
import './CadastroUsuario.css'
import { Link, useNavigate } from 'react-router-dom'
import  Usuario  from '../../models/Usuario'
import { cadastroUsuario } from '../../service/Service'

function CadastroUsuario(){

    const history = useNavigate()

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })
    
    const [usuarioResult, setUsuarioResult] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })

    const [confirmarSenha,setConfirmarSenha] = useState<String>("")
    
    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(event.target.value)
    }

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUsuario({
        ...usuario,
        [event.target.name]: event.target.value
        })
    }

    async function onSubmit(event: ChangeEvent<HTMLFormElement>){
        event.preventDefault()
        if(confirmarSenha === usuario.senha) {
        try {
            await cadastroUsuario('/usuarios/cadastrar', usuario, setUsuarioResult)
            alert('Usuário cadastrado com sucesso')
        } catch (error) {
            alert('Por favor, verifique os campos')
        }
        } else {
        alert('As senhas não coincidem')
        setConfirmarSenha('')
        setUsuario({
            ...usuario,
            senha: ''
        })
        }
    }

    useEffect(() => {
        console.log('rodou')
    }, [usuario.nome])

    useEffect(() => {
        if(usuarioResult.id !== 0) {
        history('/login')
        }
    }, [usuarioResult])

    function back() {
        history('/login')
    }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagemCadastro'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                    <Typography
                      variant='h3'
                      gutterBottom
                      color='textPrimary'
                      component='h3'
                      align='center'
                      className='textosCadastrar'>Cadastrar
                      </Typography>
                        <TextField
                            value={usuario.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            updateModel(e)}
                          id='nome'
                          label='nome'
                          variant='outlined'
                          name='nome'
                          margin='normal'
                          fullWidth/>

                        <TextField
                            value={usuario.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                updateModel(e)
                            }
                          id='usuario'
                          label='usuário'
                          variant='outlined'
                          name='usuario'
                          margin='normal'
                          fullWidth/>

                        <TextField
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            updateModel(e)
                        }
                          id='senha'
                          label='senha'
                          variant='outlined'
                          name='senha'
                          margin='normal'
                          type='password'fullWidth />

                        <TextField
                        value={confirmarSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            confirmarSenhaHandle(e)
                        }
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