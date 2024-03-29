import React from 'react'
import './Footer.css'
import {Typography, Grid} from "@material-ui/core";
import {Box} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

      var footerComponent;

      if(token != ''){
        footerComponent = <div className="footer">
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className='icons' />
                        </a>
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className='icons' />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon  className='icons' />
                        </a>
                    </Box>
                </Box>
                <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://brasil.generation.org" rel="noopener noreferrer">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Gustavo Santiago Pereira</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </div>
      }

  return (
    <>
           {footerComponent} 
        </>
  )
}

export default Footer