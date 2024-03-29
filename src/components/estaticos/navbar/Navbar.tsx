import "./Navbar.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import Login from "../../../paginas/login/Login";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/action";
import {toast} from 'react-toastify'

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const history = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    toast.info("Usuário deslogado");
    history("/login");
  }

  var navbarComponent;

  if(token!= ''){
    navbarComponent = <div className="navbar">
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box className="cursor">
          <Typography variant="h5" color="inherit">
            BlogPessoal
          </Typography>
        </Box>

        <Box display="flex" justifyContent="start">
          <Box mx={1} className="cursor">
            <Link to={"/home"}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Link>
          </Box>

          <Link to={"/postagens"}>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
          </Link>

          <Link to={"/temas"}>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
          </Link>

          <Box mx={1} className="cursor">
            <Link to={"/cadastrarTema"}>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Link>
          </Box>

          <Box mx={1} className="cursor" onClick={goLogout}>
            <Typography variant="h6" color="inherit">
              logout
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  </div>
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;