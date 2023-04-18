import React, { ChangeEvent, useState, useEffect } from 'react'
import './Login.css'
import { Grid, Typography, TextField } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../service/Service'
import UsuarioLogin from '../../models/UsuarioLogin';
import CadastroUsuario from '../cadastroUsuario/CadastroUsuario';
import useLocalStorage from 'react-use-localstorage';
import { api } from '../../service/Service';

function Login() {

    // Vem lógica
    //let numero = 0
    //let history = useHistory()

    const [token, setToken] = useLocalStorage('token')
    
    const useHistory = useNavigate()

    const [numero, setNumero] = useState(0)

    const [userLogin, setUserLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: '',
        token: ''
    })

    function updateModel(event: ChangeEvent <HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })

        //console.log(userLogin)
    }

    useEffect(()=>{
        if(token !== ""){
            useHistory('/home')
        }
    }, [token])

    async function onSubmit(event: ChangeEvent<HTMLFormElement>){
        event.preventDefault()
        //console.log('userLogin: ' + userLogin)
        //console.log('userLogin: ' + Object.values(userLogin))
        try {
            //const resposta = await api.post('/usuarios/logar', userLogin)
            //setToken(resposta.data.token)
            await login('/usuarios/logar', userLogin, setToken)
            alert('Usuario logado com sucesso')
        } catch(error) {
            console.log(error)
            alert('Usúario ou senha invalidos')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={6}>

                {/* <button onClick={() => {numero = numero + 1 console.log(numero)}}adicionar 1</button> */}

                <button onClick={() => {
                    setNumero(() => numero + 1)
                    console.log(numero)
                }} >adicionar 1 </button>

                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar {numero}  </Typography>
                        <TextField
                          id='usuario'
                          label='usuário'
                          variant='outlined'
                          name='usuario'
                          value={userLogin.usuario}
                          onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                          margin='normal'
                          fullWidth/>

                        <TextField
                          id='senha'
                          label='senha'
                          variant='outlined'
                          value={userLogin.senha}
                          onChange={(event:ChangeEvent<HTMLInputElement>)=>updateModel(event)}
                          name='senha'
                          margin='normal'
                          type='password'fullWidth />
                          
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrarusuario'>
                        <Typography
                              variant='subtitle1'
                              gutterBottom
                              align='center'
                              className='textos1'>Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
  )
}

export default Login